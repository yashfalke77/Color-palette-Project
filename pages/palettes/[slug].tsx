import React, { useEffect, useRef, useState } from 'react'
import styles from "@styles/paletteSlug.module.scss"
import Palette from '@components/palette/Palette'
import seedColors from 'src/utils/seedColors'
import ColorBoxDetailed from '@components/colorbox/ColorBoxDetailed'
import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'
import Link from 'next/link'
import { generateDifferentUnit } from 'src/utils/colorHelpers'

const SinglePalette = () => {
    const [colorUnit, setColorUnit] = useState("hex")

    const ref: any = useRef()
    const ref1: any = useRef()
    const [dropDown, setDropDown] = useState(false)
    const [options, setOptions] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                setDropDown(false)
            }
            if (ref1.current && !ref1.current.contains(evt.target)) {
                setOptions(false)
            }
        })
    }, [])

    let seedColor = {
        paletteName: "Material UI Colors",
        id: "material-ui-colors",
        emoji: "🎨",
        colors: [
            { name: "red", hex: "F44336" },
            { name: "pink", hex: "E91E63" },
            { name: "purple", hex: "9C27B0" },
            { name: "deeppurple", hex: "673AB7" },
            { name: "indigo", hex: "3F51B5" },
            { name: "blue", hex: "2196F3" },
            { name: "lightblue", hex: "03A9F4" },
            { name: "cyan", hex: "00BCD4" },
            { name: "cyan", hex: "E9EDC9" },
            { name: "light cyan", hex: "caf0f8" },
        ],
    }

    const newseedColor = generateDifferentUnit(seedColor)

    return (
        <>
            < Navbar />
            <div className={styles.palettes} >
                <div className={styles.palettes__top}>
                    <h1 className={styles.palettes__headingPrimary}>Palette</h1>
                    <div className={styles.palettes__topLeft}>
                        <div className={styles.palettes__dropDownContainer} >
                            <button className={styles.palettes__dropDown} ref={ref} onClick={() => (setDropDown(true))}>
                                <span className={styles.palettes__dropDownText}>{colorUnit}</span>
                                <svg className={styles.palettes__iconArrow}>
                                    <use href="/icons/symbol-defs.svg#icon-chevron-small-down"></use>
                                </svg>
                            </button>

                            {dropDown && (
                                <div className={styles.palettes__options}>
                                    <ul className={styles.palettes__list}>
                                        <li className={styles.palettes__item}>
                                            <button className={styles.palettes__link} onClick={() => (setColorUnit("hex"))}>hex</button>
                                        </li>
                                        <li className={styles.palettes__item}>
                                            <button className={styles.palettes__link} onClick={() => (setColorUnit("rgba"))}>
                                                rgba
                                            </button>
                                        </li>
                                        <li className={styles.palettes__item}>
                                            <button className={styles.palettes__link} onClick={() => (setColorUnit("rgb"))}>
                                                rgb
                                            </button>
                                        </li>
                                        <li className={styles.palettes__item}>
                                            <button className={styles.palettes__link} onClick={() => (setColorUnit("hsla"))}>
                                                hsla
                                            </button>
                                        </li>
                                        <li className={styles.palettes__item}>
                                            <button className={styles.palettes__link} onClick={() => (setColorUnit("cmyk"))}>
                                                cmyk
                                            </button>
                                        </li>
                                        <li className={styles.palettes__item}>
                                            <button className={styles.palettes__link} onClick={() => (setColorUnit("lab"))}>
                                                lab
                                            </button>
                                        </li>
                                        <li className={styles.palettes__item}>
                                            <button className={styles.palettes__link} onClick={() => (setColorUnit("num"))}>
                                                num
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className={styles.palettes__likes}>
                            <button className={styles.palettes__button1}>
                                <svg className={styles.palettes__iconHeart}>
                                    <use href="/icons/symbol-defs.svg#icon-heart-outlined"></use>
                                </svg>
                                <span className={styles.palettes__text}>40.8k</span>
                            </button>
                            <div ref={ref1}>
                                <button className={styles.palettes__button2} onClick={() => (setOptions(true))}>
                                    <svg className={styles.palettes__iconArrow1}>
                                        <use href="/icons/symbol-defs.svg#icon-chevron-small-down"></use>
                                    </svg>
                                </button>
                                {options && (
                                    <div className={styles.palettes__options1}>
                                        <ul className={styles.palettes__list1}>
                                            <li className={styles.palettes__item1}>
                                                <Link href="/">
                                                    <a className={styles.palettes__link1}>
                                                        <svg className={styles.palettes__options1Icon1}>
                                                            <use href="/icons/symbol-defs.svg#icon-launch"></use>
                                                        </svg>
                                                        <span className={styles.palettes__optionsText1}>Open in a generator</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <div className={styles.palettes__divider}></div>
                                            <li className={styles.palettes__item1}>
                                                <Link href="/">
                                                    <a className={styles.palettes__link1}>
                                                        <svg className={styles.palettes__options1Icon1}>
                                                            <use href="/icons/symbol-defs.svg#icon-link"></use>
                                                        </svg>
                                                        <span className={styles.palettes__optionsText1}>Copy URL</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className={styles.palettes__item1}>
                                                <Link href="/">
                                                    <a className={styles.palettes__link1}>
                                                        <svg className={styles.palettes__options1Icon1}>
                                                            <use href="/icons/symbol-defs.svg#icon-remove_red_eye"></use>
                                                        </svg>
                                                        <span className={styles.palettes__optionsText1}>Quick View</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <div className={styles.palettes__divider}></div>
                                            <li className={styles.palettes__item1}>
                                                <Link href="/">
                                                    <a className={styles.palettes__link1}>
                                                        <svg className={styles.palettes__options1Icon1}>
                                                            <use href="/icons/symbol-defs.svg#icon-heart-outlined"></use>
                                                        </svg>
                                                        <span className={styles.palettes__optionsText1}>Save Palette</span>
                                                    </a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <section className={styles.palettes__body}>
                    {newseedColor.colors.map(color => (
                        <ColorBoxDetailed key={color.hex} len={newseedColor.colors.length} color={color} hex={color.hex} colorUnit={colorUnit} />
                    ))}
                </section>
                <section className={styles.palettes__bottom}>
                    <h2 className={styles.palettes__headingSecondary}>Similar Palettes</h2>
                    <div className={styles.palettes__all}>
                        <Palette {...seedColors[4]} />
                        <Palette {...seedColors[0]} />
                        <Palette {...seedColors[1]} />
                        <Palette {...seedColors[2]} />
                        <Palette {...seedColors[3]} />
                        <Palette {...seedColors[6]} />
                        <Palette {...seedColors[5]} />
                        <Palette {...seedColors[7]} />
                        <Palette {...seedColors[8]} />
                        <Palette {...seedColors[9]} />
                        <Palette {...seedColors[10]} />
                        <Palette {...seedColors[11]} />
                    </div>
                </section>

                <div className={styles.palettes__more}>
                    <Link href="/palettes">
                        <a className={styles.palettes__btnOutline}>Explore More Similar Palettes</a>
                    </Link>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default SinglePalette