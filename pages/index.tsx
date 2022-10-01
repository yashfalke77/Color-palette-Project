import Navbar from "@components/navbar/Navbar";
import Link from "next/link";
import React from "react";
import styles from "@styles/index.module.scss"
import Footer from "@components/footer/Footer";
import Head from "next/head";
import logo from "@public/images/colors-short.png"
import Intro from "@components/auth/Intro";
import OurServices from "@components/ourServices/OurServices";

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
      < OurServices />
      <Footer />
    </div>
  );
};

export default Home;
