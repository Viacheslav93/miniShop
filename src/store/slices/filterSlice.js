import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: {
        title: '',
        activeCategory: 'all'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searchByTitle (state, action) {
            state.filter.title = action.payload
        },
        filterCategory (state, action) {
            state.filter.activeCategory = action.payload
        },
    }
})

export const {searchByTitle, filterCategory} = filterSlice.actions
export default filterSlice.reducer