import { newColorAdded } from '@redux/slices/colorsGenerate'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from "./newPaletteForm.module.scss"
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

interface NewPaletteForm {
    len: number,
}

const NewPaletteForm = ({ len }: NewPaletteForm) => {



    const [currentColor, setCurrentColor] = useColor("hex", "#121212");

    const dispatch = useDispatch()

    const addColor = () => {
        dispatch(newColorAdded({ currentColor: currentColor.hex }))
    }

    let disableButton = len === 10 ? true : false


    return (
        <div className={styles.paletteForm}>
            <ColorPicker width={420} height={250} hideHSV color={currentColor} alpha onChange={setCurrentColor} />
            <div className={styles.paletteForm__divider}></div>

            <div className={styles.paletteForm__buttons}>
                <button style={{ backgroundColor: currentColor.hex }} className={styles.paletteForm__btnRound} disabled={disableButton} onClick={addColor}>Add Color</button>
                <button className={styles.paletteForm__btnOutline}>Random Color</button>
            </div>
        </div>
    )
}

export default NewPaletteForm