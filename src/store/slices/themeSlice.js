import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: JSON.parse(localStorage.getItem('darkTheme') || false)
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme = !state.theme
            localStorage.setItem('darkTheme', JSON.stringify(state.theme))
        } 
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer