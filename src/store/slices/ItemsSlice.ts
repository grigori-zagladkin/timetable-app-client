import { createSlice } from "@reduxjs/toolkit";
import { IItemState } from "../../models/items.models";

const initialState: IItemState = {};

const ItemsSlice = createSlice({
    name: "ItemsSlice",
    initialState,
    reducers: {},
    extraReducers: {},
});

export const {} = ItemsSlice.actions;

export default ItemsSlice.reducer;
