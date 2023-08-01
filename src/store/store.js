import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";
import themeReducer from "./slices/themeSlice";
import filterReducer from "./slices/filterSlice";
import limitReducer from "./slices/limitSlice";
import sortReducer from "./slices/sortSlice";

import { productAPI } from "../services/ProductService";
import { setupListeners } from "@reduxjs/toolkit/query";


const rootReducer = combineReducers({
    cartReducer,
    favoriteReducer,
    themeReducer,
    filterReducer,
    limitReducer,
    sortReducer,
    [productAPI.reducerPath]: productAPI.reducer
})

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware)
    })
}

// setupListeners(store.dispatch)