import Link from 'next/link'
import React from 'react'
import styles from "./intro.module.scss"
import { generalOpened, loginOpened, registerOpened } from '@redux/slices/authPopup'
import { useDispatch } from 'react-redux'


interface IntroProps {
    auth: string
}


const Intro = ({ auth }: IntroProps) => {

    const dispatch = useDispatch()



    const handleClick = () => {
        dispatch(generalOpened({ open: false }))
        if (auth === "in") {
            dispatch(loginOpened({ open: true }))
        } else if (auth == "up") {
            dispatch(registerOpened({ open: true }))
        }
    }

    const handleClose = () => {
        dispatch(generalOpened({ open: false }))
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