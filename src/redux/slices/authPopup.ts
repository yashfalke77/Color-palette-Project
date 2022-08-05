import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "authPopup",
    initialState: {
        general: false,
        login: false,
        register: false
    },
    reducers: {
        generalOpened : (state, action) => {
            state.general = action.payload.open
        },
        loginOpened : (state, action) => {
            state.login = action.payload.open
        },
        registerOpened : (state, action) => {
            state.register = action.payload.open
        }
    }
})

export default slice.reducer

export const {generalOpened, loginOpened, registerOpened} = slice.actions

