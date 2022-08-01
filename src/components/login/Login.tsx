import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from "./login.module.scss"
interface IntroProps {
    setOpenPopup: Dispatch<SetStateAction<boolean>>,
    setAuth: Dispatch<SetStateAction<string>>
}

const Login = ({ setOpenPopup, setAuth }: IntroProps) => {

    const [inputType, setInputType] = useState("password")


    const handleShowHide = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        inputType === "password" ? setInputType("text") : setInputType("password")
        console.log(inputType)
    }

    const handleClose = () => {
        setOpenPopup(false)
        setAuth("")
    }

    return (
        <div>
            <div className={styles.auth}>
                <section className={styles.section}>
                    <button className={styles.section__btnClose} onClick={handleClose}>
                        <svg className={styles.section__closeIcon}>
                            <use href="/icons/symbol-defs.svg#icon-clear"></use>
                        </svg>
                    </button>
                    <h1 className={styles.section__heading}>Sign In</h1>
                    <p className={styles.section__description}>Sign in with your email here.</p>
                    <div className={styles.section__options}>
                        <form>
                            <input type="text" placeholder='Email' className={styles.section__input} />
                            <div className={styles.section__password}>
                                <input type={inputType} placeholder='Password' className={styles.section__input} />
                                <button type='button' onClick={handleShowHide} className={styles.section__passwordButton}>
                                    <svg className={styles.section__passwordButtonIcon}>
                                        <use href={`/icons/symbol-defs.svg#icon-${inputType === "password" ? "visibility_off" : "remove_red_eye"}`}></use>
                                    </svg>
                                </button>
                            </div>
                            <button type='submit' className={styles.section__btnColor}>Sign In</button>
                        </form>
                    </div>
                    <footer className={styles.section__footer}>
                        <div className={styles.section__policy}>
                            By continuing you agree to our &nbsp;
                            <Link href="/palettes">
                                <a className={styles.section__policyHighlight}>Terms of Service</a>
                            </Link>.
                            <br /> Read our &nbsp;
                            <Link href="/palettes">
                                <a className={styles.section__policyHighlight}>Privacy Policy</a>
                            </Link>.
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.section__loginOptions}>
                            <p>Forgot password? &nbsp;
                                <Link href="/">
                                    <a className={styles.section__link}>Reset</a>
                                </Link>
                            </p>
                            <p>Dont have an Account? &nbsp;
                                <Link href="/">
                                    <a className={styles.section__link}>Sign Up</a>
                                </Link>
                            </p>
                        </div>
                    </footer>
                </section>
            </div>
        </div>
    )
}

export default Login