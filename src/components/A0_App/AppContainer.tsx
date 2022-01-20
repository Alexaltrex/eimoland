import React from "react";
import {App} from "./App";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "../../theme";


export const AppContainer = () => {
    return (
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>

    )
}