import { createSlice, PayloadAction, Selector } from "@reduxjs/toolkit";
import { AppState } from "../app/App.store";
import { createSelector } from "reselect";

export interface Palette {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
}

interface BackgroundTheme {
    about: string;
    projects: string;
    portfolio: string;
    contact: string;
    hexPalette: Palette
}


export interface Theme {
    name: string;
    textClass: string;
    baseColor: string;
    backgrounds: BackgroundTheme;
    cardShape: "card-bubble" | "card-circle";
    cardClasses: string[];
}

export const themes: Theme[] = [
    {
        name: "classic",
        textClass: "text-white shadow-dark",
        baseColor: "bg-dark-gray",
        backgrounds: {
            about: "bg-dark-sea-green",
            projects: "bg-steel-blue",
            portfolio: "bg-dark-violet",
            contact: "bg-steel-blue",
            hexPalette: {
                primary: "#343a40", // grey
                secondary: "#44af69", // green
                tertiary: "#4e6996", // blue
                quaternary: "#7f6289" // purple
            },
        },
        cardShape: "card-bubble",
        cardClasses: ['card-classic-1', 'card-classic-2', 'card-classic-3', 'card-classic-4', 'card-classic-5', 'card-classic-6']
    },
    {
        name: "primary",
        textClass: "text-black ",
        baseColor: "bg-light-gray",
        backgrounds: {
            //about: "bg-primary-blue",
            about: "bg-primary-yellow",
            projects: "bg-light-gray",
            portfolio: "bg-primary-blue",
            contact: "bg-primary-red",
            hexPalette: {
                primary: "#b4b4b4", // grey
                secondary: "#EB5656", // red
                tertiary: "#6ABBF1", // blue
                quaternary: "#F3D74C" // yellow
            },
        },
        cardShape: "card-bubble",
        cardClasses: ['card-primary-1', 'card-primary-2', 'card-primary-3']
    },
    {
        name: "purples",
        textClass: "text-white shadow-dark",
        baseColor: "bg-blue-violet",
        backgrounds: {
            about: "bg-purple",
            projects: "bg-blue-violet",
            portfolio: "bg-dark-orchid",
            contact: "bg-lavender",
            hexPalette: {
                primary: "#501C80", // blue-violet
                secondary: "#B56AEE", // lavendar
                tertiary: "#6525A5", // purple
                quaternary: "#180b22" // dark-orchid
            },
        },
        cardShape: "card-bubble",
        cardClasses: ['card-purples-2', 'card-purples-3', 'card-purples-4']
    },
    {
        name: "coffee break",
        textClass: "text-black",
        baseColor: "bg-brown-sugar",
        backgrounds: {
            about: "bg-dark-coffee",
            projects: "bg-black-coffee",
            portfolio: "bg-dark-coffee",
            contact: "bg-cafe-au-lait",
            hexPalette: {
                primary: "#9C6644", // brown-sugar
                secondary: "#B08968", // cafe au lait
                tertiary: "#7F5539", // dark coffee
                quaternary: "#DDB892" // burlywood
            },
        },
        cardShape: "card-bubble",
        cardClasses: ['card-coffee-1', 'card-coffee-2', 'card-coffee-3', 'card-coffee-4']
    }
];

export interface ThemeState {
    currentTheme: Theme;
}

const initialState: ThemeState = {
    currentTheme: themes[0]
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setCurrentTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
            state.currentTheme = action.payload || state.currentTheme
        },
        setCardShape: (state: ThemeState, action: PayloadAction<"card-bubble" | "card-circle">) => {
            state.currentTheme.cardShape = action.payload || state.currentTheme.cardShape
        },
        setBackgroundTheme: (state: ThemeState, action: PayloadAction<BackgroundTheme>) => {
            state.currentTheme.backgrounds = action.payload || state.currentTheme.backgrounds
        }
    }
});

export const { setCurrentTheme, setCardShape, setBackgroundTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const getCurrentTheme: Selector<AppState, Theme> = state => state.theme.currentTheme;

export const getCardShape: Selector<AppState, "card-bubble" | "card-circle"> = state => state.theme.currentTheme.cardShape;
export const getCardClasses: Selector<AppState, string[]> = state => state.theme.currentTheme.cardClasses;

export const getTextTheme: Selector<AppState, string> = state => state.theme.currentTheme.textClass;

export const getBackgroundTheme: Selector<AppState, BackgroundTheme> = state => state.theme.currentTheme.backgrounds;
export const getAboutBackground: Selector<AppState, string> = createSelector(getBackgroundTheme, theme => theme.about);
export const getProjectsBackground: Selector<AppState, string> = createSelector(getBackgroundTheme, theme => theme.projects);
export const getPortfolioBackground: Selector<AppState, string> = createSelector(getBackgroundTheme, theme => theme.portfolio);
export const getContactBackground: Selector<AppState, string> = createSelector(getBackgroundTheme, theme => theme.contact);
export const getColorPalette: Selector<AppState, Palette> = createSelector(getBackgroundTheme, theme => theme.hexPalette);

export const getBaseColor: Selector<AppState, string> = state => state.theme.currentTheme.baseColor;
