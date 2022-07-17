import React,{ Fragment, useState } from "react";
import { IconButton, Grid, Drawer, Link, Typography, Fade } from "@mui/material"
import { Box } from '@mui/system'
import {Link as RouterLink} from 'react-router-dom'

export default function DrawerComponent() {
    const [open, setOpen] = useState(false)
    return(
        <Fragment>
            <IconButton sx={{p:'12px 16px',height:'47.766px'}} onClick={() => setOpen(true)}>
                <Box 
                    component='img'
                    src='https://www.univerlist.com/static/site/images/newDesign/menu.svg'
                    sx={{position:'relative',top:'1px'}}
                />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)} anchor="right" transitionDuration={450} hideBackdrop>
                <Grid sx={{p:['0 16px','0 15px'],width:'100%',borderBottom:'1px solid #eceaea',maxWidth:['100%','540px','720px'],m:'0 auto'}}>
                    <Grid container sx={{minHeight:'74px'}} justifyContent={'space-between'} alignItems={'center'}>
                        <Grid container alignItems={'flex-end'} sx={{height:'25.11px',width:'186px'}}>
                            <Link to='/' component={RouterLink} sx={{height:'24px',width:'156px'}}>
                                <Box 
                                    component='img'
                                    src='https://univerlist.com/static/site/images/newDesign/univerlist_logo.svg'
                                    sx={{height:'24px',width:'156px'}}
                                />
                            </Link>
                        </Grid>
                        <IconButton sx={{p:'12px 12px',height:'47.766px'}} onClick={() => setOpen(false)}>
                            <Box 
                                component='img'
                                src='https://www.univerlist.com/static/site/images/newDesign/close_menu.svg'
                                sx={{position:'relative',top:'1px',height:'20px',width:'20px'}}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid sx={{p:['0 16px','0 15px'],width:'100%',borderBottom:'1px solid #eceaea',maxWidth:['100%','540px','720px'],m:'0 auto'}}>
                    <Grid container sx={{width:'calc(100% + 30px)',position:'relative',right:'15px',maxWidth:['100%','540px','720px']}} justifyContent={'space-between'} alignItems={'center'}>
                        <ChildLinks item='Compare' marginTop='16px'/>
                        {
                            "Universities,Programs,Blog,Rankings".split(',').map(item => (
                                <ChildLinks item={item} key={Math.random()}/>
                            ))
                        }
                        <ChildLinks item='About us' marginBottom="28px" />
                    </Grid>
                </Grid>
                <Grid sx={{p:['0 16px','0 15px'],width:'100%',maxWidth:['100%','540px','720px'],m:'28px auto 0 auto'}}>
                    <Grid container sx={{width:'100%',maxWidth:['100%','540px','720px']}} justifyContent={'space-between'} alignItems={'center'}>
                        <Link to='/' sx={{width:'100%'}} component={RouterLink}>
                            <Typography variant='body1' sx={{letterSpacing:'-.2px',fontSize:'16px',height:'23.77px'}}>
                                Sign up
                            </Typography>
                        </Link>
                        <Link to='/' sx={{width:'100%'}} component={RouterLink}>
                            <Typography variant='body1' sx={{letterSpacing:'-.2px',fontSize:'16px',mt:'28px',height:'23.77px'}}>
                                Log in
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Drawer>
        </Fragment>
    )
}

const ChildLinks = ({item,marginTop='0',marginBottom='0'}) => {
    return(
        <Link component={RouterLink} sx={{width:'100%'}} to='/' key={Math.random()}>
            <Grid container alignItems={'center'} sx={{height:'48px',mt:marginTop,mb:marginBottom,p:'0 15px',display:'flex'}}>
                <Typography variant='body1' sx={{letterSpacing:'-.2px',fontSize:'16px'}}>
                    {item}
                </Typography>
            </Grid>
        </Link>
    )
}