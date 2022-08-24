import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = process.env.REACT_APP_INSTAS_API_URL;
// const API_BASE = 'http://43.200.171.29:8080/api'


// const API_BASE = 'http://13.124.0.25/api'



const initialState = {
    // instas: [],
    isLoading: false,
    error: null,
};

export const __postRegister = createAsyncThunk("register/postRegister", async (payload, thunkAPI) => {
    try {
        console.log(payload)
        const data = await axios.post(`${API_BASE}/signup`, payload)
        // return thunkAPI.fulfillWithValue(data)
        // await axios.post("http://localhost:3001/instas", payload)
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error);
    }
});

export const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: {
        [__postRegister.pending]: (state) => {
            state.isLoading = true;
        },
        [__postRegister.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [__postRegister.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const { } = RegisterSlice.actions;
export default RegisterSlice.reducer;