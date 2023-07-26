import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../utils/userService";

// interface User {
//     id: number,
//     email: string,
//     username: string,
//     password: string,
//     name: {
//         firstname: string,
//         lastname: string
//     },
//     address: {
//         city: string,
//         street: string,
//         number: number,
//         zipcode: string,
//         geolocation: {
//             lat: string,
//             long: string
//         }
//     },
//     phone: string
// }

interface userState {
    // user: User,
    token: string,
    // isLoading: boolean,
    // Error: string
}

const initialState: userState = {
    // user: {
    //     id: 0,
    //     email: '',
    //     username: '',
    //     password: '',
    //     name: {
    //         firstname: '',
    //         lastname: ''
    //     },
    //     address: {
    //         city: '',
    //         street: '',
    //         number: 0,
    //         zipcode: '',
    //         geolocation: {
    //             lat: '',
    //             long: ''
    //         }
    //     },
    //     phone: ''
    // },
    token: "",
    // isLoading: false,
    // Error:""
}

// export const fetchUser = createAsyncThunk<User | string, number>(
//     "users/fetchUser",
//     async (id) => {
//         const response = await userService.fetchUser(id)
//         return response
//     }
// )

export const loginUser = createAsyncThunk<string, {username:string, password: string}>(
    "users/loginUser",
    async ({username, password}) => {
        const response = await userService.loginUser(username, password)
        return response.token
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // .addCase(fetchUser.pending, (state) => {
            //     state.isLoading = true
            //     state.Error = ""
            // })
            // .addCase(fetchUser.fulfilled, (state, action) => {
            //     state.user = action.payload as User
            //     state.isLoading = false
            // })
            // .addCase(fetchUser.rejected, (state) => {
            //     state.isLoading = false
            //     state.Error = "Error"
            // })
            .addCase(loginUser.fulfilled, (state,action) => {
                state.token = action.payload
            })
    }
})

const {actions} = usersSlice

export default usersSlice.reducer