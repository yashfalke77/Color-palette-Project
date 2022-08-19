import ColorBox from "@components/colorbox/ColorBox";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "src/helpers/NavLink";
import styles from "./palette.module.scss";
interface paletteProps {
    paletteName: string;
    id: string;
    emoji: string;
    colors: any[];
}

const Palette = ({ colors, id }: paletteProps) => {


    const ref: any = useRef()
    const [options, setOptions] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                setOptions(false)
            }
        })
    }, [])

    return (
        <div className={styles.palette}>
            <div className={styles.palette__colors}>
                {colors.map((color) => (
                    <ColorBox background={color.hex} name={color.name} />
                ))}
            </div>
            <div className={styles.palette__description}>
                <div className={styles.palette__like}>
                    <svg className={styles.palette__iconHeart}>
                        <use href="/icons/symbol-defs.svg#icon-heart-outlined"></use>
                    </svg>
                    <span className={styles.palette__text}>62.7k</span>
                </div>
                <div className={styles.palette__explore} ref={ref}>
                    {options && (
                        <div className={styles.palette__options}>
                            <ul className={styles.palette__list}>
                                <li className={styles.palette__item}>
                                    <NavLink href={`/palettes/${id}`}>
                                        <a className={styles.palette__link}>
                                            <svg className={styles.palette__optionsIcon}>
                                                <use href="/icons/symbol-defs.svg#icon-launch"></use>
                                            </svg>
                                            <span className={styles.palette__optionsText}>Open palette</span>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className={styles.palette__item}>
                                    <NavLink href="/">
                                        <a className={styles.palette__link}>
                                            <svg className={styles.palette__optionsIcon}>
                                                <use href="/icons/symbol-defs.svg#icon-launch"></use>
                                            </svg>
                                            <span className={styles.palette__optionsText}>Open in a generator</span>
                                        </a>
                                    </NavLink>
                                </li>
                                <div className={styles.palette__divider}></div>
                                <li className={styles.palette__item}>
                                    <NavLink href="/">
                                        <a className={styles.palette__link}>
                                            <svg className={styles.palette__optionsIcon}>
                                                <use href="/icons/symbol-defs.svg#icon-link"></use>
                                            </svg>
                                            <span className={styles.palette__optionsText}>Copy URL</span>
                                        </a>
                                    </NavLink>
                                </li>
                                <li className={styles.palette__item}>
                                    <NavLink href="/">
                                        <a className={styles.palette__link}>
                                            <svg className={styles.palette__optionsIcon}>
                                                <use href="/icons/symbol-defs.svg#icon-remove_red_eye"></use>
                                            </svg>
                                            <span className={styles.palette__optionsText}>Quick View</span>
                                        </a>
                                    </NavLink>
                                </li>
                                <div className={styles.palette__divider}></div>
                                <li className={styles.palette__item}>
                                    <NavLink href="/">
                                        <a className={styles.palette__link}>
                                            <svg className={styles.palette__optionsIcon}>
                                                <use href="/icons/symbol-defs.svg#icon-heart-outlined"></use>
                                            </svg>
                                            <span className={styles.palette__optionsText}>Save Palette</span>
                                        </a>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    )}
                    <button className={styles.palette__menu} onClick={() => (setOptions(!options))}>
                        <svg className={styles.palette__icon}>
                            <use href="/icons/symbol-defs.svg#icon-dots-three-horizontal"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Palette;
