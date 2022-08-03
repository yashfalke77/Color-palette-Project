import React from 'react'
import styles from "@styles/404.module.scss"
import logo from "@public/images/colors-long.png"
import { NavLink } from 'src/helpers/NavLink'
const PageNotFound = () => {
    return (
        <div className={styles.body}>

            <nav className={styles.nav}>
                <div className={styles.nav__left}>
                    <NavLink href="/">
                        {/* <a className={styles.nav__logo}>Colorss</a> */}
                        <a className={styles.nav__logo}>
                            <img className={styles.nav__logoImg} src={logo.src} alt="" />
                        </a>
                    </NavLink>
                    <NavLink href="/palettes" activeClassName={styles.nav__linkActive}>
                        <a className={styles.nav__link}>Discover</a>
                    </NavLink>
                    <NavLink href="/pro" activeClassName={styles.nav__linkActive} >
                        <a className={styles.nav__link}>Go Pro</a>
                    </NavLink>
                </div>
                <div className={styles.nav__right}>
                    <div className={styles.auth}>

                        <button className={styles.auth__btnOutline}>Log In</button>

                        <button className={styles.auth__btnRound}>Sign Up</button>
                    </div>
                </div>
            </nav >


            <div className={styles.error}>
                <div className={styles.error__left}>
                    <h1 className={styles.error__heading}>Ooops...</h1>
                    <h3 className={styles.error__subheading}>Something went <br /> <span className={styles.error__subheadingImp}>Wrong!</span></h3>
                </div>
                <div className={styles.error__right}>
                    <div className={styles.error__svg}>
                        {/* <ErrorImage className={styles.error__svg} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound