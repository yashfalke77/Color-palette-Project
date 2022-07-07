import React from 'react'
import { NavLink } from 'src/helpers/NavLink'
import styles from "./search.module.scss"

const Search = () => {
    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <form className={styles.search__form}>
                    <button className={styles.search__iconButton}>
                        <svg className={styles.search__icon}>
                            <use href="/icons/symbol-defs.svg#icon-search"></use>
                        </svg>
                    </button>
                    <input type="text" className={styles.search__input} placeholder="Search with colors, topic, styles or hex values..." />
                </form>
                <div className={styles.search__suggestion}>
                    <ul className={styles.search__list}>
                        <li className={styles.search__item}>
                            <NavLink href="/palettes" activeClassName={styles.search__linkActive}>
                                <a className={styles.search__link}>Popular</a>
                            </NavLink>
                        </li>
                        <li className={styles.search__item}>
                            <NavLink href="/">
                                <a className={styles.search__link}>Trending</a>
                            </NavLink>
                        </li>
                        <li className={styles.search__item}>
                            <NavLink href="/">
                                <a className={styles.search__link}>Latest</a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Search