import React from 'react'
import styles from "@styles/404.module.scss"
import errorImage from "@public/images/404.png"
import Link from 'next/link'
const PageNotFound = () => {
    return (
        <div className={styles.error}>
            <div className={styles.error__container}>
                <img className={styles.error__img} src={errorImage.src} alt="" />
            </div>
            <h1 className={styles.error__heading}>Page not found. </h1>
        </div>
    )
}

export default PageNotFound