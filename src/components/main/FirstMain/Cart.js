import { Grid, Typography ,Link, useMediaQuery } from "@mui/material";
import React from "react";
import { Box, useTheme } from '@mui/system'
import { Link as RouterLink } from 'react-router-dom'

const cartResponsiveSizes = {
    xs: 6,
    md: 3
}

export default function Cart({data,width = '100%',height = 'auto',marginBottom='50px',isArticle}) {
    const theme = useTheme()
    const widthCart = useMediaQuery(theme.breakpoints.up('md'))
    return(
        !isArticle 
        ?
        <Grid item {...(marginBottom !== 0 ?cartResponsiveSizes : {})} sx={{p:'0 15px',mb:marginBottom,width:width !== '100%' ? '306px' : 'auto'}}>
            <Link to='/' component={RouterLink} sx={{width:'100%',height:'100%',display:'block'}}>
                <Grid>
                    <Box 
                     src={data.thumbnail === null ? 'https://univerlist.com/static/site/images/newDesign/blackFakeIcon.png' : data.thumbnail}
                     component='img'
                     sx={{borderRadius:1,mb:'10px',width:width,height:height}}
                    />
                    <Typography variant='h6' sx={{pb:'3px',width:width}} fontSize={18} lineHeight={1.4} letterSpacing={-.3} fontWeight={600}>
                        {data.name}
                    </Typography>
                    <Typography variant='bod1' sx={{width:width}} fontFamily={'Averta'} lineHeight='normal' color='#7a7878' letterSpacing={-.2} fontSize={16}>
                        {
                            data.province !== undefined
                            ?
                            ((data.province !== null ? data.province+", " : "")+data.country)
                            :
                            data.universitiesNumber
                        }
                    </Typography>
                </Grid>
            </Link>
        </Grid>
        :
        <Grid sx={{minHeight:'333px',p:'0 15px',width:['240px','225px','300px','319.984px','408.33px']}}>
            <Grid>
                <Link to='/' component={RouterLink} sx={{display:'block'}}>
                    <Box 
                     component='img'
                     src={data.thumbnail === null ? 'https://univerlist.com/static/site/images/newDesign/blackFakeIcon.png' : data.thumbnail}
                     sx={{borderRadius:1,width:'100%'}}
                    />
                    <Grid sx={{}}>
                        {
                            widthCart 
                            ?
                            <Typography fontSize='18px' letterSpacing='.-2px' fontFamily='Averta' sx={{mt:3}} fontWeight={600} lineHeight={'1.4'}>
                                {data.name}
                            </Typography>
                            :
                            <Typography fontSize='18px' letterSpacing='.-2px' fontFamily='Averta' sx={{mt:1.25}} fontWeight={600} lineHeight={'1.4'}>
                                {data.nameMobile}
                            </Typography>
                        }
                    </Grid>
                </Link>
            </Grid>
        </Grid>
    )
}
