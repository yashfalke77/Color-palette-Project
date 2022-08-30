import React from 'react'
import styles from "./draggableColorbox.module.scss"

interface DraggableColorBoxProps {
    color: string,
    len: number,
}

const DraggableColorBox = ({ color, len }: DraggableColorBoxProps) => {
    return (
        <div className={styles.dragColorBox} style={{ backgroundColor: color, height: `${len > 5 ? "20rem" : "40rem"}`, width: `${len > 5 ? "20%" : "100%"}` }}>{color}</div>
    )
}

export default DraggableColorBox