import React from 'react'
import { NavLink } from 'src/helpers/NavLink'
import styles from "@styles/about.module.scss"
import logo from "@public/images/colors-long.png"
import About from "@public/images/about.png"
import About1 from "@public/images/about1.jpg"
import Link from 'next/link'
import Footer from '@components/footer/Footer'
import Navbar from '@components/navbar/Navbar'
import OurServices from '@components/ourServices/OurServices'


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

                < OurServices />

                <section className={styles.about__section2}>
                    <div className={styles.about__section2Left}>
                        <h1 className={styles.about__section2heading}>Powering the internet’s visuals</h1>
                        <p className={styles.about__section2desc}>How we started? The concept was simple. Colors was born from the pain we had in finding great, usable color palette for our product. Today, Colors is a platform fuelled by a community who give their work for free in support of the creatives everywhere. Without them, none of this would be possible.</p>
                        <Link href="/palettes">
                            <a className={styles.about__section2btnRound}>Explore Trending Palettes</a>
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
                                    <p className={styles.about__section3Info2}>yashfalke77@gmail.com</p>
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