import Navbar from '@components/navbar/Navbar'
import React from 'react'
import styles from "@styles/404.module.scss"
import Footer from '@components/footer/Footer'

const PageNotFound = () => {
    return (
        <>
            <Navbar />
            <main className={styles.error}>
                <h1 className={styles.error__heading}>404</h1>
                <p className={styles.error__subheading}>Page not found</p>
            </main>
            < Footer />

        </>
    )
}

export default PageNotFound