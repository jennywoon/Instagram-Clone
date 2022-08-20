import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    instas: [],
    // insta: {
    //     comments: [],
    // },
    isLoading: false,
    error: null,
    comments: [],
};

export const __getInstas = createAsyncThunk("instas/getInstas", async (payload, thunkAPI) => {
    try {
        const data = await axios.get("http://localhost:3001/instas")
        console.log(data.data)
        return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __postInstas = createAsyncThunk("instas/postInstas", async (payload, thunkAPI) => {
    try {
        const data = await axios.post("http://localhost:3001/instas", payload);
        return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __getComments = createAsyncThunk("comments/getComments", async (payload, thunkAPI) => {
    try {
        const data = await axios.get('http://localhost:3001/comments');
        return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const __postComments = createAsyncThunk("comments/postComments", async (payload, thunkAPI) => {
    try {
        const data = await axios.post('http://localhost:3001/comments', payload);
        // return thunkAPI.fulfillWithValue(payload);
        return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
        return thunkAPI.rejectWithValue("ERROR=>", error);
    }
});

export const InstaSlice = createSlice({
    name: "instas",
    initialState,
    reducers: {},
    extraReducers: {
        [__getInstas.pending]: (state) => {
            state.isLoading = true;
        },
        [__getInstas.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.instas = action.payload;
        },
        [__getInstas.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__postInstas.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__postInstas.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.instas.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__postInstas.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        [__getComments.pending]: (state) => {
            state.isLoading = true;
        },
        [__getComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
        },
        [__getComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__postComments.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__postComments.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.comments.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__postComments.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
    }
})

export const { } = InstaSlice.actions;
export default InstaSlice.reducer;
