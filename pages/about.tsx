import React from 'react'
import { NavLink } from 'src/helpers/NavLink'
import styles from "@styles/about.module.scss"
import logo from "@public/images/colors-long.png"
import About from "@public/images/about.png"
import About1 from "@public/images/about1.jpg"
import Link from 'next/link'
import Footer from '@components/footer/Footer'
import Navbar from '@components/navbar/Navbar'


const about = () => {
    return (
        <div className={styles.about}>

            < Navbar />

            <main className={styles.about__body}>
                <section className={styles.about__section1}>
                    <div className={styles.about__section1Left}>
                        <h1 className={styles.about__section1heading}>Colour the World</h1>
                        <p className={styles.about__section1desc}>Create the perfect pallete or get inspired by thousands of beautiful schemes</p>
                        <Link href="/palettes">
                            <a className={styles.about__section1btnOutline}>Start the generator</a>
                        </Link>
                        <Link href="/palettes">
                            <a className={styles.about__section1btnRound}> Explore trending palettes</a>
                        </Link>
                    </div>
                    <div className={styles.about__section1Middle}></div>
                    <div className={styles.about__section1Right}>
                        <img className={styles.about__section1Img} src={About.src} alt="" />
                    </div>
                </section>

                <section className={styles.product}>
                    <div className={styles.product__title}>
                        <h2 className={styles.product__headingPrimary}>Our Services</h2>
                        <p className={styles.product__description}>
                            Following are the service that we provide that helps you to do your
                            work more fluently and easily and increase your daily productivity.
                        </p>
                    </div>

                    <div className={styles.product__body}>

                        <a
                            target="_blank"
                            href="https://www.instagram.com/yashfalke77/"
                            rel="noreferrer" >
                            <div className={`${styles.product__card} ${styles["product__card--1"]}`}>
                                <div className={styles.product__cardOuter}>
                                    <svg className={styles.product__cardIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-instagram"></use>
                                    </svg>
                                    <h3 className={styles.product__headingTertiary}>Instagram</h3>
                                    <p className={styles.product__cardDescription}>
                                        Get Your daily inspiration of beautiful palettes.
                                    </p>
                                </div>
                                {/* className="heading__secondary productcard__hovertext--1" */}
                                <div className={styles.product__cardInner}>
                                    <span className={`${styles.product__headingSecondary} ${styles["product__cardHover--1"]}`}>
                                        Follow us
                                    </span>
                                </div>
                            </div>
                        </a>

                        <a href="/" target="_blank" rel="noreferrer">
                            <div className={`${styles.product__card} ${styles["product__card--2"]}`}>
                                <div className={styles.product__cardOuter}>
                                    <span className={`${styles.product__cardBadge} ${styles["product__cardBadge--2"]}`}>soon</span>
                                    <svg className={styles.product__cardIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-android"></use>
                                    </svg>
                                    <h3 className={styles.product__headingTertiary}>Android App</h3>
                                    <p className={styles.product__cardDescription}>
                                        Thousands of palletes in your pocket
                                    </p>
                                </div>
                                <div className={styles.product__cardInner}>
                                    <span className={`${styles.product__headingSecondary} ${styles["product__cardHover--2"]}`}>
                                        View on play store
                                    </span>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/yashfalke77/"
                            target="_blank"
                            rel="noreferrer">
                            <div className={`${styles.product__card} ${styles["product__card--3"]}`}>
                                <div className={styles.product__cardOuter}>
                                    <svg className={styles.product__cardIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-linkedin-with-circle"></use>
                                    </svg>
                                    <h3 className={styles.product__headingTertiary}>Linkedin</h3>
                                    <p className={styles.product__cardDescription}>
                                        Get info about what next feature is coming.
                                    </p>
                                </div>
                                <div className={styles.product__cardInner}>
                                    <span className={`${styles.product__headingSecondary} ${styles["product__cardHover--3"]}`}>
                                        Connect us
                                    </span>
                                </div>
                            </div>
                        </a>

                        <a href="/" target="_blank" rel="noreferrer">
                            <div className={`${styles.product__card} ${styles["product__card--4"]}`}>
                                <div className={styles.product__cardOuter}>
                                    <span className={`${styles.product__cardBadge} ${styles["product__cardBadge--4"]}`}>soon</span>
                                    <svg className={styles.product__cardIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-chrome"></use>
                                    </svg>
                                    <h3 className={styles.product__headingTertiary}>Chrome Extension</h3>
                                    <p className={styles.product__cardDescription}>
                                        Get and edit pallete on every new tab.
                                    </p>
                                </div>
                                <div className={styles.product__cardInner}>
                                    <span className={`${styles.product__headingSecondary} ${styles["product__cardHover--4"]}`}>
                                        Add to chrome
                                    </span>
                                </div>
                            </div>
                        </a>

                        <a href="/" target="_blank" rel="noreferrer">
                            <div className={`${styles.product__card} ${styles["product__card--5"]}`}>
                                <div className={styles.product__cardOuter}>
                                    <span className={`${styles.product__cardBadge} ${styles["product__cardBadge--5"]}`}>soon</span>
                                    <svg className={styles.product__cardIcon}>
                                        <use href="/icons/symbol-defs.svg#icon-figma"></use>
                                    </svg>
                                    <h3 className={styles.product__headingTertiary}>Figma Plugin</h3>
                                    <p className={styles.product__cardDescription}>
                                        All Palletes right into your workspace
                                    </p>
                                </div>
                                <div className={styles.product__cardInner}>
                                    <span className={`${styles.product__headingSecondary} ${styles["product__cardHover--5"]}`}>
                                        Install now
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>


                <section className={styles.about__section2}>
                    <div className={styles.about__section2Left}>
                        <h1 className={styles.about__section2heading}>Powering the internet’s visuals</h1>
                        <p className={styles.about__section2desc}>How we started? The concept was simple. Colors was born from the pain we had in finding great, usable color palette for our product. Today, Colors is a platform fuelled by a community who give their work for free in support of the creatives everywhere. Without them, none of this would be possible.</p>
                        <Link href="/palettes">
                            <a className={styles.about__section2btnRound}>Sign Up for Free</a>
                        </Link>
                    </div>
                    <div className={styles.about__section2Right}>
                        <img className={styles.about__section2Img} src={About1.src} alt="" />
                    </div>
                </section>

                <section className={styles.about__section3}>
                    <h1 className={styles.about__section3heading}>Get in touch</h1>
                    <p className={styles.about__section3desc}>I love to talk with you!</p>
                    <div className={styles.about__section3Partition}>
                        <div className={styles.about__section3Left}>
                            <ul className={styles.about__section3List}>
                                <li className={styles.about__section3Items}>
                                    <p className={styles.about__section3Info1}>support</p>
                                    <p className={styles.about__section3Info2}>yashfalke77@gmail.com</p>
                                    <p className={styles.about__section3Info3}>You can also look at About page</p>
                                </li>
                                <li className={styles.about__section3Items}>
                                    <p className={styles.about__section3Info1}>about</p>
                                    <p className={styles.about__section3Info2}>Made by Yash Falke</p>
                                    <p className={styles.about__section3Info3}>Created during a weekend as Personal Project</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.about__section3Right}>
                            <ul className={styles.about__section3List}>
                                <li className={styles.about__section3Items}>
                                    <p className={styles.about__section3Info1}>company</p>
                                    <p className={styles.about__section3Info2}>Made by Yash Falke</p>
                                    <p className={styles.about__section3Info3}>Created during a weekend as Personal Project</p>
                                </li>
                                <li className={styles.about__section3Items}>
                                    <p className={styles.about__section3Info1}>info</p>
                                    <p className={styles.about__section3Info2}>Colors</p>
                                    <p className={styles.about__section3Info3}>Mumbai, India.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default about