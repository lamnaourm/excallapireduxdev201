import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('users/getUsers',async () => {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products')
    return res.data
})

const UserSlice = createSlice({
    name:'users',
    initialState:{
        users:[],
        loading:false,
        error:''
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export default UserSlice.reducer