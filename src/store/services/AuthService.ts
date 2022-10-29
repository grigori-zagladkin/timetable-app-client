import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { LoginRequest, LoginResponse, RegistrationForm, User } from "../../models/auth.models";

export const AuthService = createApi({
    reducerPath: "AuthService",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_BASE_URL}auth`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken || window.localStorage.getItem("accessToken");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (dto) => ({
                url: `/login`,
                method: "POST",
                body: dto,
            }),
        }),
        logout: builder.mutation<{ success: boolean }, void>({
            query: () => ({
                url: `/logout`,
                method: "POST",
            }),
        }),
        registration: builder.mutation<User, RegistrationForm>({
            query: (dto) => ({
                url: `/registration`,
                method: "POST",
                body: dto,
            }),
        }),
        me: builder.
    }),
});

export const {} = AuthService;
