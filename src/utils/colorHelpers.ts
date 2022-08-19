import chroma from "chroma-js"

interface Color {
    name: string;
    hex: string;
    rgb: string;
    rgba: string;
    hsla: string;
    lab: string;
    num: string;
    cmyk: string;
}
interface paletteProps {
    paletteName: string;
    id: string;
    emoji: string;
    colors: Array<Color>;
}


function generateDifferentUnit(starterPalette:any){
    let newPalette:paletteProps = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: []
    }

    for (let color of starterPalette.colors){
        const hsla = chroma(color.hex).hsl().map(ele => ((Math.round(ele * 100) / 100).toFixed(2)))
        const lab = chroma(color.hex).lab().map(ele => ((Math.round(ele * 100) / 100).toFixed(2)))
        const cmyk = chroma(color.hex).cmyk().map(ele => ((Math.round(ele * 100) / 100).toFixed(2)))
        newPalette.colors.push({
            name: color.name,
            hex: color.hex,
            rgb: String(chroma(color.hex).rgb()),
            rgba: String(chroma(color.hex).rgba()),
            hsla: String(hsla),
            lab: String(lab),
            num: String(chroma(color.hex).num()),
            cmyk: String(cmyk),
        })
    }

    return newPalette
}

export {generateDifferentUnit}