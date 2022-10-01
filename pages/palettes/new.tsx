import Navbar from '@components/navbar/Navbar'
import NewPaletteForm from '@components/newPalette/NewPaletteForm'
import React, { useState } from 'react'
import styles from "@styles/new.module.scss"
import { useSelector, RootStateOrAny } from 'react-redux'
import DraggableColorBox from '@components/colorbox/DraggableColorBox'
import SavePalette from '@components/newPalette/SavePalette'



const New = () => {

    const colors = useSelector((state: RootStateOrAny) => state.colors.colorsGenerate.colors)

    const [save, setSave] = useState(false)

    const handleSave = () => {
        setSave(true)
    }

    return (
        <div className={styles.paletteNew}>
            <Navbar />
            <div className={styles.new}>
                <div className={styles.new__left}>
                    <div className={styles.new__nav}>
                        <h2 className={styles.new__headingPrimary}>Create A Palette</h2>
                    </div>
                    <div className={styles.new__body}>
                        <div style={{ flexWrap: `${colors.length > 5 ? "wrap" : "nowrap"}` }} className={styles.new__dragableColorBoxes}>
                            {colors.map((c: any) => (
                                <DraggableColorBox name={c.name} hex={c.hex} len={colors.length} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.new__footer}>
                        <button className={styles.new__btnRound} onClick={handleSave}>Save Palette</button>
                        <button className={styles.new__btnOutline}>Clear Palette</button>
                    </div>
                </div>
                <div className={styles.new__right}>
                    <NewPaletteForm len={colors.length} />
                </div>
            </div>
            {save && <SavePalette setSave={setSave} />}
        </div>
    )
}

export default New