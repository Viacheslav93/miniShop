import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorite') || '[]')
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite (state, action) {
            const findProduct = state.favorites.find(item => item.id === action.payload.id)
            if(findProduct) {
                return
            } else {
                state.favorites.push(action.payload)
                localStorage.setItem('favorite', JSON.stringify(state.favorites))
            }
        },
        removeFromFavorite (state, action) {
            state.favorites = state.favorites.filter(item => item.id !== action.payload)
            localStorage.setItem('favorite', JSON.stringify(state.favorites))
        }
    }
})

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer