import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from "./login.module.scss"
import { useDispatch } from 'react-redux'
import { loginOpened, registerOpened } from '@redux/slices/authPopup'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"


interface LoginProps {
    setAuth: Dispatch<SetStateAction<string>>
}

interface LoginSchema {
    email: string;
    password: string;
}

const loginSchema: Yup.SchemaOf<LoginSchema> = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(100).matches(/^[a-z0-9]+$/i, "Password should contain alphabets and numbers only").required()
})

const Login = ({ setAuth }: LoginProps) => {

    const [inputType, setInputType] = useState("password")
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: yupResolver<Yup.AnyObjectSchema>(loginSchema)
    })

    const submitForm: SubmitHandler<LoginSchema> = (data) => {
        console.log(data)
    }

    const handleShowHide = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        inputType === "password" ? setInputType("text") : setInputType("password")
        console.log(inputType)
    }

    const handleClose = () => {
        dispatch(loginOpened({ open: false }))
        setAuth("")
    }

    const handleRegister = () => {
        dispatch(loginOpened({ open: false }))
        dispatch(registerOpened({ open: true }))
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
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div className={styles.section__email}>
                                <input type="text" {...register("email")} placeholder='Email' className={styles.section__input} />
                                <p className={styles.section__errors}>{errors.email?.message}</p>
                            </div>
                            <div className={styles.section__password}>
                                <input type={inputType} {...register("password")} placeholder='Password' className={styles.section__input} />
                                <button type='button' onClick={handleShowHide} className={styles.section__passwordButton}>
                                    <svg className={styles.section__passwordButtonIcon}>
                                        <use href={`/icons/symbol-defs.svg#icon-${inputType === "password" ? "visibility_off" : "remove_red_eye"}`}></use>
                                    </svg>
                                </button>
                                <p className={styles.section__errors}>{errors.password?.message}</p>
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
                                <button className={styles.section__link} onClick={handleRegister}>
                                    Sign Up
                                </button>
                            </p>
                        </div>
                    </footer>
                </section>
            </div>
        </div>
    )
}

export default Login