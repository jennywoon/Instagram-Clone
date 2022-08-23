import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const API_BASE = process.env.REACT_APP_INSTAS_API_URL
// const API_BASE = 'http://43.200.171.29:8080/api'

const initialState = {
  nickname: "",
  token: false,
  isLoading: false,
  error: null,
};

export const __loginCheck = createAsyncThunk("Login/loginCheck", async (payload, thunkAPI) => {
  try {
    const accessToken = cookies.get("Authorization");
    console.log(accessToken)
    const data = await axios.get(`${API_BASE}/login`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [__loginCheck.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.nickname = action.payload;
      state.token = true;
    },
    [__loginCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { } = loginSlice.actions;
export default loginSlice.reducer;