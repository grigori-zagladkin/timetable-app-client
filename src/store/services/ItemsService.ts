import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { IItem } from "../../models/items.models";
import { baseURL } from "../../utils";

export const ItemsService = createApi({
    reducerPath: "ItemsService",
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseURL}items`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken || window.localStorage.getItem("accessToken");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getItemsOnWeek: builder.query<IItem[], void>({
            query: () => ({
                url: `/`,
            }),
        }),
        getItemsOnCurrentDay: builder.query<IItem[], void>({
            query: () => ({
                url: `/`,
            }),
        }),
        createItem: builder.mutation<IItem, void>({
            query: (dto) => ({
                url: ``,
                method: "POST",
                body: dto,
            }),
        }),
        updateItem: builder.mutation<IItem, void>({
            query: (dto) => ({
                url: ``,
                method: "POST",
                body: dto,
            }),
        }),
        deleteItem: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({}),
        }),
    }),
});

export const {} = ItemsService;
