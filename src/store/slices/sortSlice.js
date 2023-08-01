import { createSlice } from "@reduxjs/toolkit"

const initialState ={ 
    sort: 'new products'
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        sortProducts (state, action) {
            state.sort = action.payload
        }
    }
})

export const {sortProducts} = sortSlice.actions
export default sortSlice.reducer