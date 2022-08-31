import { newColorAdded } from '@redux/slices/colorsGenerate'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from "./newPaletteForm.module.scss"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

interface NewPaletteForm {
    len: number,
}

const NewPaletteForm = ({ len }: NewPaletteForm) => {



    const [currentColor, setCurrentColor] = useColor("hex", "#121212");

    const dispatch = useDispatch()

    let disableButton = len === 10 ? true : false

    interface SavePaletteSchema {
        name: string
    }

    const savePaletteSchema: Yup.SchemaOf<SavePaletteSchema> = Yup.object().shape({
        name: Yup.string().required().max(20),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<SavePaletteSchema>({
        resolver: yupResolver<Yup.AnyObjectSchema>(savePaletteSchema)
    })

    const submitForm: SubmitHandler<SavePaletteSchema> = (data) => {
        console.log(data)
        dispatch(newColorAdded({ currentColor: { name: data.name, hex: currentColor.hex } }))
    }


    return (
        <div className={styles.paletteForm}>
            <ColorPicker width={450} height={250} hideHSV color={currentColor} alpha onChange={setCurrentColor} />
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={styles.paletteForm__name}>
                    <input type="text" {...register("name")} placeholder='Palette Name' className={styles.paletteForm__input} />
                    <p className={styles.paletteForm__errors}>{errors.name?.message}</p>
                </div>
                <div className={styles.paletteForm__divider}></div>

                <div className={styles.paletteForm__buttons}>
                    <button type='submit' style={{ backgroundColor: currentColor.hex }} className={styles.paletteForm__btnRound} disabled={disableButton}>Add Color</button>
                    <button className={styles.paletteForm__btnOutline}>Random Color</button>
                </div>
            </form>

        </div>
    )
}

export default NewPaletteForm