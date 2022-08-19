import Navbar from "@components/navbar/Navbar";
import Link from "next/link";
import React from "react";
import styles from "@styles/index.module.scss"
import Footer from "@components/footer/Footer";
import Head from "next/head";
import logo from "@public/images/colors-short.png"
import Intro from "@components/auth-intro/Intro";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={logo.src} type="image/x-icon"></link>
      </Head>


      <Navbar />

      <main className={styles.main}>
        <div className={styles.main__right}></div>
        <div className={styles.main__left}>
          <h1 className={styles.main__headingPrimary}>
            The superfast color palettes generator!
          </h1>
          <p className={styles.main__text}>
            Create the perfect pallete or get inspired by thousands of beautiful schemes
          </p>
          <Link href="/palettes">
            <a className={styles.main__btnOutline}>Start the generator</a>
          </Link>
          <Link href="/palettes">
            <a className={styles.main__btnRound}> Explore trending palettes</a>
          </Link>
        </div>
      </main>

      {/* <section className={styles.section}>

      </section> */}

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

      <Footer />
    </div>
  );
};

export default Home;
