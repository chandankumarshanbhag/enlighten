import React, { createContext, useState, useContext, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { blue,red,pink } from '@material-ui/core/colors';
import theme from 'theme/index';


const Themes = [
    {
        direction: 'ltr',
        responsiveFontSizes: true,
        theme: "LIGHT",
        name: "LIGHT",
        backgroundColor: "#fff",
        fontColor: "#000",
        selectedColor: blue[900]
    },
    {
        direction: 'ltr',
        responsiveFontSizes: true,
        theme: "ONE_DARK",
        name: "ONE DARK",
        backgroundColor: "#282C34",
        fontColor: "#fff",
        selectedColor: red[900]
    },
    {
        direction: 'ltr',
        responsiveFontSizes: true,
        theme: "UNICORN",
        name: "UNICORN",
        backgroundColor: "#2a2d3d",
        fontColor: "#fff",
        selectedColor: pink[900]
    }
]

export const UIContext = createContext({});

export default ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState(0);

    return <UIContext.Provider value={{ currentTheme: Themes[currentTheme],getCurrentTheme: () => Themes[currentTheme],getCurrentThemeIndex: () => currentTheme, currentTheme, setCurrentTheme, themes: Themes,getThemes: () => Themes }}><ThemeProvider theme={theme(Themes[currentTheme])}>{children}</ThemeProvider></UIContext.Provider>;
}

export function useUI() {
    const context = useContext(UIContext);
    return context
};