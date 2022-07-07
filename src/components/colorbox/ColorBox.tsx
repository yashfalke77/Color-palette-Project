import React, { useState } from 'react'
import styles from "./colorbox.module.scss"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { toast } from "react-toastify";

interface ColorBoxProps {
    background: string,
    name: string
}

const ColorBox = ({ background, name }: ColorBoxProps) => {

    const [copied, setCopied] = useState(false)

    const changeCopyState = () => {
        setCopied(true);
        toast("🦄 Color copied to clipboard!", {
            position: "bottom-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div className={styles.colorBox} style={{ backgroundColor: background }}>
                <span className={`${styles["colorBox__text"]} ${styles[`${copied && "colorBox__text--hide"}`]}`}>
                    {background}
                </span>
                <svg className={`${styles["colorBox__icon"]} ${styles[`${copied && "colorBox__icon--show"}`]}`}>
                    <use href="/icons/symbol-defs.svg#icon-check"></use>
                </svg>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox