import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "newPaletteColors",
    initialState: {
        colors: [{name: "purple", hex: "#960bdb"}, {name: "different pink", hex: "#e15764"}]
    },
    reducers: {
        newColorAdded : (state, action) => {
            state.colors.push(action.payload.currentColor)
        }
    }
})

export default slice.reducer

export const {newColorAdded} = slice.actions

