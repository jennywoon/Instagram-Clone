import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = process.env.REACT_APP_INSTAS_API_URL;
console.log(API_BASE);

const initialState = {
    isLoading: false,
    error: null,
};

export const __postRegister = createAsyncThunk("register/postRegister", async (payload, thunkAPI) => {
    try {
        await axios.post(`${API_BASE}/signup`, payload)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
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

export const {} = RegisterSlice.actions;
export default RegisterSlice.reducer;