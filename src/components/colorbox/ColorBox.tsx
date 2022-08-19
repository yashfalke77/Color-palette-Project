import React, { useState } from 'react'
import styles from "./colorbox.module.scss"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { toast } from "react-toastify";
import chroma from 'chroma-js';

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

    const isDarkColor = chroma(background).luminance() <= 0.15
    console.log(chroma("3F51B5").luminance())

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div className={styles.colorBox} style={{ backgroundColor: `#${background}` }}>
                <span className={`${styles["colorBox__text"]} ${styles[`${isDarkColor ? "colorBox__text--light" : "colorBox__text--dark"}`]} ${styles[`${copied && "colorBox__text--hide"}`]}`}>
                    {background}
                </span>
                <svg className={`${styles["colorBox__icon"]}  ${styles[`${isDarkColor ? "colorBox__icon--light" : "colorBox__icon--dark"}`]}   ${styles[`${copied && "colorBox__icon--show"}`]}`}>
                    <use href="/icons/symbol-defs.svg#icon-check"></use>
                </svg>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox