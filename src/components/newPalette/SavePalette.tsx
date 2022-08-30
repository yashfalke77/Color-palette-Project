import React, { Dispatch, SetStateAction, } from 'react'
import styles from "./savePalette.module.scss"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import CheckCirlce from "@public/icons/check_circle.svg"
import * as Yup from "yup"

interface SavePaletteProps {
    setSave: Dispatch<SetStateAction<boolean>>
}


const SavePalette = ({ setSave }: SavePaletteProps) => {



    interface SavePaletteSchema {
        name: string
    }

    const savePaletteSchema: Yup.SchemaOf<SavePaletteSchema> = Yup.object().shape({
        name: Yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<SavePaletteSchema>({
        resolver: yupResolver<Yup.AnyObjectSchema>(savePaletteSchema)
    })

    const submitForm: SubmitHandler<SavePaletteSchema> = (data) => {
        console.log(data)
        setSave(false)
        toast.success("Palette Saved Successfully", {
            position: "bottom-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            icon: CheckCirlce,
        });
    }

    const handleClose = () => {
        setSave(false)
    }

    return (
        <div className={styles.save}>
            <section className={styles.section}>
                <button className={styles.section__btnClose} onClick={handleClose}>
                    <svg className={styles.section__closeIcon}>
                        <use href="/icons/symbol-defs.svg#icon-clear"></use>
                    </svg>
                </button>
                <h1 className={styles.section__heading}>Save Palette</h1>
                <p className={styles.section__description}>Please Enter a name for your beautiful palette</p>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className={styles.section__name}>
                        <input type="text" {...register("name")} placeholder='Palette Name' className={styles.section__input} />
                        <p className={styles.section__errors}>{errors.name?.message}</p>
                    </div>
                    <button className={styles.section__btnColor} type="submit">Save Palette</button>
                </form>

            </section>
        </div>
    )
}

export default SavePalette