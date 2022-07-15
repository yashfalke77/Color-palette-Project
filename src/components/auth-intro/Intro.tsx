import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import styles from "./intro.module.scss"

interface IntroProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Intro = ({ setOpenPopup }: IntroProps) => {
    return (
        <div className={styles.login}>
            <section className={styles.section}>
                <button className={styles.section__btnClose} onClick={() => (setOpenPopup(false))}>
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
                    <Link href="/palettes">
                        <a className={styles.section__btnColor}>Continue with Email</a>
                    </Link>
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