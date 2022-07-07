import React from 'react'
import Navbar from '@components/navbar/Navbar'
import Palette from '@components/palette/Palette'
import Search from '@components/search/Search'
import seedColors from 'src/utils/seedColors'
import styles from "@styles/palettes.module.scss"


const index = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <div className={styles.palettes__main}>
                <div className={styles.palettes__title}>
                    <h2 className={styles.palettes__headingPrimary}>Trending Color Palettes</h2>
                    <p className={styles.palettes__description}>
                        Get inspired by thousands of beautiful color schemes and make
                        something cool!
                    </p>
                </div>
                <div className={styles.palettes__all}>
                    <Palette {...seedColors[4]} />
                    <Palette {...seedColors[0]} />
                    <Palette {...seedColors[1]} />
                    <Palette {...seedColors[2]} />
                    <Palette {...seedColors[3]} />
                    <Palette {...seedColors[6]} />
                    <Palette {...seedColors[5]} />
                    <Palette {...seedColors[7]} />
                    <Palette {...seedColors[8]} />
                    <Palette {...seedColors[9]} />
                    <Palette {...seedColors[10]} />
                    <Palette {...seedColors[11]} />
                </div>
            </div>
        </div>

    )
}

export default index