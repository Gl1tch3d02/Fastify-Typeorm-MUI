import CssBaseline from "@mui/material/CssBaseline"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppThemeProvider, Body, Header } from "./components"

const queryClient = new QueryClient()

const App = (): JSX.Element => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppThemeProvider>
                <CssBaseline enableColorScheme />
                <Header />
                <Body />
            </AppThemeProvider>
        </QueryClientProvider>
    )
}

export default App
