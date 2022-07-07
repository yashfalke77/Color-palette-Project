import ColorBox from "@components/colorbox/ColorBox";
import React from "react";
import styles from "./palette.module.scss";

interface paletteProps {
    paletteName: string;
    id: string;
    emoji: string;
    colors: any[];
}

const Palette = ({ colors }: paletteProps) => {
    return (
        <div className={styles.palette}>
            <div className={styles.palette__colors}>
                {colors.map((color) => (
                    <ColorBox background={color.color} name={color.name} />
                ))}
            </div>
            <div className={styles.palette__description}>
                <svg className={styles.palette__icon}>
                    <use href="/icons/symbol-defs.svg#icon-dots-three-horizontal"></use>
                </svg>
                <span className={styles.palette__text}>62.7k</span>
            </div>
        </div>
    );
};

export default Palette;
