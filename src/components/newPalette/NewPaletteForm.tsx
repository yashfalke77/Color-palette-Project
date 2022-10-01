import { newColorAdded } from '@redux/slices/colorsGenerate'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from "./newPaletteForm.module.scss"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useSelector, RootStateOrAny } from 'react-redux'

interface NewPaletteForm {
    len: number,
}

interface SavePaletteSchema {
    name: string
}

const NewPaletteForm = ({ len }: NewPaletteForm) => {

    const [currentColor, setCurrentColor] = useColor("hex", "#121212");
    const dispatch = useDispatch()
    let disableButton = len === 10 ? true : false
    const colors = useSelector((state: RootStateOrAny) => state.colors.colorsGenerate.colors)
    const [uniqueName, setUniqueName] = useState(false)

    const savePaletteSchema: Yup.SchemaOf<SavePaletteSchema> = Yup.object().shape({
        name: Yup.string().required().max(20),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<SavePaletteSchema>({
        resolver: yupResolver<Yup.AnyObjectSchema>(savePaletteSchema)
    })

    const submitForm: SubmitHandler<SavePaletteSchema> = (data) => {
        setUniqueName(false)
        let flag = false
        for (const arr of colors) {
            if (data.name === arr.name) {
                flag = true
                break
            }
        }
        if (flag) {
            setUniqueName(true)
            return
        }
        dispatch(newColorAdded({ currentColor: { name: data.name, hex: currentColor.hex } }))
    }


    return (
        <div className={styles.paletteForm}>
            <ColorPicker width={450} height={250} hideHSV color={currentColor} alpha onChange={setCurrentColor} />
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={styles.paletteForm__name}>
                    <input type="text" {...register("name")} placeholder='Palette Name' className={styles.paletteForm__input} />
                    <p className={styles.paletteForm__errors}>{errors.name?.message}</p>
                    {uniqueName && <p className={styles.paletteForm__errors}>name Should be unique</p>}
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