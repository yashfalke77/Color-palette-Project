import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'src/helpers/NavLink'
import styles from "./navbar.module.scss"


const Navbar = () => {

    const refExplore: any = useRef(null)
    const [exploreOptions, setExploreOptions] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (evt) => {
            if (refExplore.current && !refExplore.current.contains(evt.target)) {
                setExploreOptions(false)
            }
        })
    }, [])

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__left}>
                <NavLink href="/">
                    <a className={styles.nav__logo}>Colorss</a>
                </NavLink>
                <NavLink href="/palettes" activeClassName={styles.nav__linkActive}>
                    <a className={styles.nav__link}>Discover</a>
                </NavLink>
                <NavLink href="/pro" activeClassName={styles.nav__linkActive} >
                    <a className={styles.nav__link}>Go Pro</a>
                </NavLink>
            </div>
            <div className={styles.nav__right}>
                <div className={styles.explore} ref={refExplore}>
                    <button className={styles.explore__menu} onClick={() => (setExploreOptions(!exploreOptions))}>
                        <svg className={styles.explore__icon}>
                            <use href="/icons/symbol-defs.svg#icon-dots-three-horizontal"></use>
                        </svg>
                    </button>
                    {exploreOptions && (
                        <div className={styles.explore__options}>
                            <Link href="/">
                                <a className={styles.explore__links}>Explore palettes</a>
                            </Link>
                            <Link href="/about" >
                                <a className={styles.explore__links}>Generate palettes</a>
                            </Link>
                            <Link href="/" >
                                <a className={styles.explore__links}>Advertise</a>
                            </Link>
                            <Link href="/" >
                                <a className={styles.explore__links}>Become a Contributor</a>
                            </Link>
                            <Link href="/" >
                                <a className={styles.explore__links}>About</a>
                            </Link>
                            <div className={styles.explore__bottom}>
                                <a href="https://www.instagram.com/yashfalke77/" target="_blank" rel='noreferrer'>
                                    <svg className={styles.explore__bottomIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-instagram"></use>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/channel/UCax8or2_bzQCHe0GdSLITOA" target="_blank" rel='noreferrer'>
                                    <svg className={styles.explore__bottomIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-youtube"></use>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/yashfalke77/" target="_blank" rel='noreferrer'>
                                    <svg className={styles.explore__bottomIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-linkedin-with-circle"></use>
                                    </svg>
                                </a>
                                <a href="https://codepen.io/yashfalke77" target="_blank" rel='noreferrer'>
                                    <svg className={styles.explore__bottomIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                                <a href="https://github.com/yashfalke77" target="_blank" rel='noreferrer'>
                                    <svg className={styles.explore__bottomIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.auth}>
                <Link href="/">
                    <a className={styles.auth__btnOutline}>Log In</a>
                </Link>
                <Link href="/">
                    <a href="/" className={styles.auth__btnRound}>Sign Up</a>
                </Link>
            </div>
        </nav >
    )
}

export default Navbar