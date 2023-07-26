import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./items";
import categoryReducer from "./categories"
import cartRedcuer from "./cart"
import userReducer from "./users"

const store = configureStore({
    reducer:{
        items: itemReducer,
        categories: categoryReducer,
        cart: cartRedcuer,
        user: userReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat()
})



export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store



