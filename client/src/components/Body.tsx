import { Box, Typography } from "@mui/material"

export const Body = (): JSX.Element => {
    return (
        <Box sx={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Typography variant='h1'>Hello World!</Typography>
        </Box>
    )
}
