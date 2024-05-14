import * as colors from "@mui/material/colors"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import createTheme from "@mui/material/styles/createTheme"
import type { ReactNode } from "react"

type FetchableThemeProviderProps = {
    children: ReactNode
}

export const AppThemeProvider = ({ children }: FetchableThemeProviderProps): JSX.Element => {
    const darkTheme = createTheme({
        typography: {
            fontFamily: "Calibri, arial"
        },
        palette: {
            mode: "dark",
            primary: colors.blue
        }
    })

    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}
