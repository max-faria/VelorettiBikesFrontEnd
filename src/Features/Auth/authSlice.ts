import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const loginAsync = createAsyncThunk(
    'user/login',
    async (credentials: { email: string, password: string }, thunkAPI) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/user/login`,
                credentials
            );
            return response.data;
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                return thunkAPI.rejectWithValue(err.response.data.message || "Login Failed");
            } else {
                return thunkAPI.rejectWithValue("There was a problem with the request");
            }
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginAsync.fulfilled, (state) => {
            state.isAuthenticated = true;
            state.loading = false;
        });
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        });
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;