import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { IAuthState, LoginResponse } from "../../models/auth.models";

const initialState: IAuthState = {
    user: null,
    accessToken: null,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, { payload: { user, accessToken } }: PayloadAction<LoginResponse>) => {
            state.user = user;
            state.accessToken = accessToken;
        },
        logout: (state, action) => {
            state.user = null;
            state.accessToken = null;
        }
    },
    extraReducers: 
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;

export const { setCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
