import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Item} from "./items";


interface cartState{
    items: Item[],
}

const initialState: cartState = {
    items: []
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload)
        },
        deleteCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((el) => {
                return el.id !== action.payload
            })
        }
    }
})

const {actions} = cartSlice

export default cartSlice.reducer

export const {addCart, deleteCart} = actions