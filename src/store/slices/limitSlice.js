import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // limit: localStorage.getItem('limit') || 8
    limit: 9,
}

export const filterSlice = createSlice({
    name: 'limit',
    initialState,
    reducers: {
        productLimitOnPage (state, action) {
            state.limit = action.payload
            // localStorage.setItem('limit', state.limit)
        },
    }
})

export const {productLimitOnPage} = filterSlice.actions
export default filterSlice.reducer