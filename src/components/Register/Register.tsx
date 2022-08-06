import { registerOpened, loginOpened } from '@redux/slices/authPopup'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from "../login/login.module.scss"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

interface RegisterProps {
    setAuth: Dispatch<SetStateAction<string>>
}

interface RegisterSchema {
    fullName: string;
    email: string;
    password: string;
}


const registerSchema: Yup.SchemaOf<RegisterSchema> = Yup.object().shape({
    fullName: Yup.string().min(5).max(128).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(100).matches(/^[a-z0-9]+$/i, "Password should contain alphabets and numbers only").required()
})


const Register = ({ setAuth }: RegisterProps) => {
    const [inputType, setInputType] = useState("password")
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: yupResolver<Yup.AnyObjectSchema>(registerSchema)
    })

    const submitForm: SubmitHandler<RegisterSchema> = (data) => {
        console.log(data)
    }

    const handleShowHide = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        inputType === "password" ? setInputType("text") : setInputType("password")
    }

    const handleClose = () => {
        dispatch(registerOpened({ open: false }))
        setAuth("")
    }

    const handleLogin = () => {
        dispatch(registerOpened({ open: false }))
        dispatch(loginOpened({ open: true }))
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
                    <h1 className={styles.section__heading}>Sign Up</h1>
                    <p className={styles.section__description}>Create a free account with your email.</p>
                    <div className={styles.section__options}>
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div className={styles.section__name}>
                                <input type="text" placeholder='Full Name' {...register("fullName")} className={styles.section__input} />
                                <p className={styles.section__errors}>{errors.fullName?.message}</p>
                            </div>
                            <div className={styles.section__email}>
                                <input type="email" placeholder='Email' {...register("email")} className={styles.section__input} />
                                <p className={styles.section__errors}>{errors.email?.message}</p>
                            </div>
                            <div className={styles.section__password}>
                                <input type={inputType} placeholder='Password' {...register("password")} className={styles.section__input} />
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
                            <p>Have an Account? &nbsp;
                                <button onClick={handleLogin} className={styles.section__link}>
                                    Sign In
                                </button>
                            </p>
                        </div>
                    </footer>
                </section>
            </div>
        </div>
    )
}

export default Register