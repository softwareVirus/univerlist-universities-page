import React from 'react'
import {Button, Grid, Typography} from '@mui/material'


export default function SecondSectionCart() {
    return(
        <Grid 
            sx={{
                bgcolor:'#d2c8f1',
                p:0,
                position:'relative'
            }}
        >
            <Grid 
                container
                sx={{
                    position:'relative',
                    zIndex:2,
                    '@media (min-width: 1200px)':{
                        maxWidth:'1226px'
                    },
                    maxWidth:['100%','540px','720px','960px'],
                    p:'7em 15px',
                    m:'0 auto'
                }}
            >
            <Grid 
              sx={{
                backgroundImage:'url('+'http://univerlist.com/static/site/images/newDesign/pillow_banner.png'+')',
                width:'100%',
                height:'100%',
                position:'absolute',
                backgroundSize:'contain !important',
                backgroundRepeat:'no-repeat',
                backgroundColor:"#d2c8f1"+' !important',
                backgroundPosition:'100% 50%',
                top:0,
                left:0
              }}
            />
            <Grid
                sx={{
                    '@media (min-width: 1200px)': {
                        maxWidth:'1026px',
                        m:'0 auto',
                        width:'100%',
                        p:'0 15px'
                    }
                }}
            >
                    <Typography variant="h2" fontSize='5.142857142857143em' lineHeight='1.11' color='#141111' sx={{position:'relative',letterSpacing:'-2px'}} fontWeight='600' fontFamily='Calibre'>
                        Find your dream <br/> Master Degree
                    </Typography>
                    <Button variant='contained' sx={{lineHeight:'normal',mt:'22px'}}>
                        Find now!
                    </Button>
            </Grid>
            </Grid>
        </Grid>
    )
}