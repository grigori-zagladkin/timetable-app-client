import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AuthService } from "./services/AuthService";
import { ItemsService } from "./services/ItemsService";
import AuthSlice from "./slices/AuthSlice";
import ItemsSlice from "./slices/ItemsSlice";

const rootReducer = combineReducers({
    [AuthService.reducerPath]: AuthService.reducer,
    [ItemsService.reducerPath]: ItemsService.reducer,
    auth: AuthSlice,
    items: ItemsSlice,
});

const middlewares = [AuthService.middleware];

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([...middlewares]),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

setupListeners(setupStore().dispatch);
