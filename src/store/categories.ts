import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {itemApi} from "../utils";
import {act} from "react-dom/test-utils";


interface categoriesState{
    categories: string[],
    isLoading: boolean,
    Error: string
}

const initialState: categoriesState = {
    categories:[],
    isLoading: false,
    Error: ""
}


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async function (){
        const response = await itemApi.fetchCategories()
        return response.data
    }
)


const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, (state) =>{
                state.isLoading = true
                state.Error = ""
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false
                state.Error = "Error"
            })
    }
})

export default categoriesSlice.reducer
