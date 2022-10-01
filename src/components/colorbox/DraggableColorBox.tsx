import { colorRemoved } from '@redux/slices/colorsGenerate'
import React from 'react'
import { useDispatch } from 'react-redux'
import styles from "./draggableColorbox.module.scss"

interface DraggableColorBoxProps {
    name: string,
    hex: string,
    len: number,
}

const DraggableColorBox = ({ name, hex, len }: DraggableColorBoxProps) => {

    const dispatch = useDispatch()
    const deleteColor = () => {
        dispatch(colorRemoved({ colorToRemove: name }))
    }

    return (
        <div className={styles.dragColorBox} style={{ backgroundColor: hex, height: `${len > 5 ? "20rem" : "40rem"}`, width: `${len > 5 ? "20%" : "100%"}` }}>
            <button className={styles.dragColorBox__delete} onClick={deleteColor}>
                <svg className={styles.dragColorBox__icon}>
                    <use href="/icons/symbol-defs.svg#icon-delete"></use>
                </svg>
            </button>
            <span className={styles.dragColorBox__hex}>{hex}</span>
            <span className={styles.dragColorBox__name}>{name}</span>
        </div>
    )
}

export default DraggableColorBox