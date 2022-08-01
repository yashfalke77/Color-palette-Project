import Login from '@components/login/Login'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from "./intro.module.scss"
interface IntroProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>,
    setOpenLoginPopup: Dispatch<SetStateAction<boolean>>,
    setOpenRegisterPopup: Dispatch<SetStateAction<boolean>>,
    setAuth: Dispatch<SetStateAction<string>>,
    auth: string,
}

const Intro = ({ setOpenPopup, setOpenLoginPopup, setAuth, setOpenRegisterPopup, auth }: IntroProps) => {



    const handleClick = () => {
        setOpenPopup(false)
        console.log(auth)
        if (auth === "in") {
            setOpenLoginPopup(true)
        } else if (auth === "up") {
            console.log("hw")
            setOpenRegisterPopup(true)
        }
    }

    const handleClose = () => {
        setOpenPopup(false)
        setAuth("")
    }

    return (
        <div className={styles.auth}>
            <section className={styles.section}>
                <button className={styles.section__btnClose} onClick={handleClose}>
                    <svg className={styles.section__closeIcon}>
                        <use href="/icons/symbol-defs.svg#icon-clear"></use>
                    </svg>
                </button>
                <h1 className={styles.section__heading}>Hello!</h1>
                <p className={styles.section__description}>Use you email or another services to continue with colors</p>
                <div className={styles.section__options}>

                    <Link href="/palettes">
                        <a className={styles.section__btnNormal}>
                            <svg className={styles.section__googleIcon}>
                                <use href="/icons/symbol-defs.svg#icon-google"></use>
                            </svg>
                            <span>Continue with Google</span>
                        </a>
                    </Link>


                    <button className={styles.section__btnColor} onClick={handleClick}>Continue with Email</button>

                </div>
                <footer className={styles.section__footer}>
                    By continuing you agree to our &nbsp;
                    <Link href="/palettes">
                        <a className={styles.section__footerHighlight}>Terms of Service</a>
                    </Link>.
                    <br /> Read our &nbsp;
                    <Link href="/palettes">
                        <a className={styles.section__footerHighlight}>Privacy Policy</a>
                    </Link>.
                </footer>
            </section>

        </div>
    )
}

export default Intro