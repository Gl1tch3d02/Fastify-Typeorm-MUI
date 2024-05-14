import { Typography } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

export const TOOLBAR_HEIGHT = "64px"

export const Header = (): JSX.Element => {
    const TITLE = "Title"

    return (
        <AppBar position='static'>
            <Toolbar sx={{ height: TOOLBAR_HEIGHT }}>
                <Typography variant='h4'>{TITLE}</Typography>
            </Toolbar>
        </AppBar>
    )
}
