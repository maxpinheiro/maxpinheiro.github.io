import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, ThemeState } from "../store/Theme.store";

export interface AppState {
    theme: ThemeState
}

export const store = configureStore<AppState>({
    reducer: {
        theme: themeReducer
    }
});
