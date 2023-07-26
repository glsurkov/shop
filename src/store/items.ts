import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {itemApi} from "../utils";

export interface Item {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}


export interface itemState {
    items: Item[],
    isLoading: boolean,
    Error: string
}

const initialState: itemState = {
    items: [],
    isLoading: false,
    Error: ""

}

export const fetchItems = createAsyncThunk(
    "items/fetchItems",
    async function () {
        const response = await itemApi.fetchItems()
        return response.data
    }
)


const itemSlice = createSlice({
        name: 'items',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(fetchItems.pending, (state) => {
                    state.isLoading = true
                    state.Error = ""
                })
                .addCase(fetchItems.fulfilled, (state, action) => {
                    if(action.payload){
                        state.items = action.payload
                    }
                    state.isLoading = false
                })
                .addCase(fetchItems.rejected, (state) => {
                    state.isLoading = false
                    state.Error = "Error"
                })
        }
    }
)

const {} = itemSlice.actions

export default itemSlice.reducer