import { AppBar, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import DesktopNavbar from "./navbar/DesktopNavbar";
import MobileNavbar from "./navbar/MobileNavbar";
export default function Header() {
    const theme = useTheme()
    const width = useMediaQuery(theme.breakpoints.up('lg'))
    return(
        <AppBar sx={{boxShadow:'none',position:'sticky',p:'0 !important'}}>
            {
                width 
                ?
                <DesktopNavbar />
                :
                <MobileNavbar />
            }
        </AppBar>
    );
}
