import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from "./colorboxdetailed.module.scss"
import { toast } from "react-toastify";

interface ColorBoxProps {
    hex: string;
    color: any;
    colorUnit: string;
    len: number;
}

const ColorBoxDetailed = ({ hex, color, colorUnit, len }: ColorBoxProps) => {



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
        <CopyToClipboard text={color[colorUnit]} onCopy={changeCopyState}>
            <div className={styles.colorBox} style={{ backgroundColor: `#${hex}`, height: `${len > 5 ? "20rem" : "40rem"}` }}>
                <span className={`${styles["colorBox__text"]} ${styles[`${copied && "colorBox__text--hide"}`]}`}>
                    Click to Copy
                </span>
                <svg className={`${styles["colorBox__icon"]} ${styles[`${copied && "colorBox__icon--show"}`]}`}>
                    <use href="/icons/symbol-defs.svg#icon-check"></use>
                </svg>
                <span className={styles.colorBox__textBottom}>
                    {color[colorUnit]}
                </span>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBoxDetailed