import { Toolbar, Grid,Link, IconButton, SvgIcon } from "@mui/material";
import React from "react";
import Box from '@mui/system/Box'
import {Link as RouterLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from "./DrawerComponent";

export default function MobileNavbar() {
    return(
        <Toolbar sx={{p:[0,'24px 0','11.886px 0'],bgcolor:'white',borderBottom:'1px solid #eceaea'}} >
            <Grid sx={{p:['0 16px','0 15px'],width:'100%',maxWidth:['100%','540px','720px'],m:'0 auto'}}>
                <Grid container sx={{m:['0 -8px','0 -16px','0 -15px'],minHeight:'74px',width:['calc(100% + 16px)','calc(100% + 30px)']}} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid sx={{height:'24px',p:['0 8px','0 15px'],width:'186px'}}>
                        <Link to='/' component={RouterLink} sx={{height:'24px',width:'156px'}}>
                            <Box 
                                component='img'
                                src='https://univerlist.com/static/site/images/newDesign/univerlist_logo.svg'
                                sx={{height:'24px',width:'156px'}}
                            />
                        </Link>
                    </Grid>
                    <DrawerComponent />
                </Grid>
            </Grid>
        </Toolbar>
    )
}