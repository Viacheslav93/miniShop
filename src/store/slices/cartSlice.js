import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart (state, action) {
            const findProduct = state.cart.find(item => item.id === action.payload.id)

            if(findProduct) {
                findProduct.count++
            } else {
                state.cart.push(action.payload)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        removeFromCart (state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        decreaseProductCount (state, action) {
            const findIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if(state.cart[findIndex].count === 1) {
                state.cart = state.cart.filter(item => item.id !== action.payload.id)
            } else {
                state.cart[findIndex].count--
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        increaseProductCount (state, action) {
            const findIndex = state.cart.findIndex(item => item.id === action.payload.id)
                state.cart[findIndex].count++  
                localStorage.setItem('cart', JSON.stringify(state.cart)) 
        }
    }
})

export const {addToCart, removeFromCart, decreaseProductCount, increaseProductCount} = cartSlice.actions
export default cartSlice.reducer