import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'src/helpers/NavLink'
import styles from "./navbar.module.scss"
import logo from "@public/images/colors-long.png"
import Intro from '@components/auth/Intro'
import Login from '@components/auth/Login'
import Register from '@components/auth/Register'
import { generalOpened } from '@redux/slices/authPopup'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'



const Navbar = () => {

    const refExplore: any = useRef(null)
    const dispatch = useDispatch()


    const [exploreOptions, setExploreOptions] = useState(false)
    const [auth, setAuth] = useState("")


    const general = useSelector((state: RootStateOrAny) => state.auth.authPopup.general)
    const login = useSelector((state: RootStateOrAny) => state.auth.authPopup.login)
    const register = useSelector((state: RootStateOrAny) => state.auth.authPopup.register)

    useEffect(() => {
        document.addEventListener("click", (evt) => {
            if (refExplore.current && !refExplore.current.contains(evt.target)) {
                setExploreOptions(false)
            }
        })
    }, [])

    const handleSignIn = () => {
        dispatch(generalOpened({ open: true }))
        setAuth("in")
    }
    const handleSignUp = () => {
        dispatch(generalOpened({ open: true }))
        setAuth("up")
    }

    return (
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
                <NavLink href="/palettes/new" activeClassName={styles.nav__linkActive} >
                    <a className={styles.nav__link}>Create New</a>
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
                            <Link href="/about" >
                                <a className={styles.explore__links}>About</a>
                            </Link>
                            <div className={styles.line}></div>
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

                <button className={styles.auth__btnOutline} onClick={handleSignIn}>Log In</button>

                <button className={styles.auth__btnRound} onClick={handleSignUp}>Sign Up</button>
            </div>

            {general && <Intro auth={auth} />}
            {login && <Login setAuth={setAuth} />}
            {register && <Register setAuth={setAuth} />}
        </nav >
    )
}
export default Navbar