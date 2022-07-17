import { AppBar, Typography, Link, Toolbar, Grid, Button, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { Box } from '@mui/system';
import {Link as RouterLink, Router} from 'react-router-dom'

const bpRepeat = (string,repeatNumber) => {
    return string.repeat(repeatNumber).slice(0,-1).split(",")
}


export default function  DesktopNavbar() {
    return(
        <Toolbar sx={{p:[...(bpRepeat('19px 32px,',4)),'19px 64px'],minHeight:['none','34.46px'],bgcolor:'#fff',borderBottom:'1px solid #eceaea'}}>
            <Grid sx={{minHeight:[...(bpRepeat('35.898px,',4)),'38.33px'],width:'100%'}} contanier justifyContent='space-between' flexDirection='column' alignItems='baseline'>
                <Grid sx={{minHeight:['34.66px'],flex:'1'}} container alignItems={'center'}>
                    <Grid sx={{height:'26px',mr:6}}>
                        <Link to='/' component={RouterLink}>
                            <Box 
                                component='img'
                                src='https://univerlist.com/static/site/images/newDesign/univerlist_logo.svg'
                                sx={{height:'26px'}}
                            />
                        </Link>
                    </Grid>
                    <Grid flexGrow={1} display='flex' position={'relative'} flexDirection={'row'} justifyContent={'space-between'} sx={{ml:[...(bpRepeat('0,',4)),'26px'],width:'calc(100% - 244.08px)',top:'3.5px',height:'34.66px'}}>
                        <Grid container width={'auto'}>
                            {
                                "Universities Compare Rankings Disciplines Programs Blog".split(" ").map(item => (
                                    <Button sx={{p:'6px 16px',textTransform:'none',height:'32px'}} disableTouchRipple>
                                        <Typography variant='body1' fontWeight='600' lineHeight='26px' fontSize={[...(bpRepeat('14px,',4)),'16px']}>
                                            {item}
                                        </Typography>                                    
                                    </Button>
                                ))
                            }
                        </Grid>
                        <Grid display={'flex'} flexDirection={'row'}>
                        <Button  component={RouterLink} to='/' sx={{letterSpacing:'0.2px',height:'32px',fontWeight:600,fontSize:[...(bpRepeat('14px,',4)),'16px'],p:'6px 16px',textTransform:'none',width:'auto',mr:1}} disableTouchRipple>
                            Sign up                                 
                        </Button>
                        <Button sx={{p:'6px 16px',textTransform:'none',fontWeight:600,letterSpacing:'0.2px',height:'32px',fontSize:[...(bpRepeat('14px,',4)),'16px']}} disableTouchRipple>
                            Log in     
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}