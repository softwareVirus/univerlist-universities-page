import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import SectionCartBackground from "./SectionCartBackground";

export default function SectionCart({title,buttonTitle,bgColor,bgSrc}) {
    return(
        <Grid 
            sx={{
                paddingBottom:['52.114px !important',null,null,null,'81px !important'],
                p:['73.143px 0','71.314px 0','89.600px 0','98px 0'],
                display:'block',
                position:'relative'
            }}
        >
            <SectionCartBackground bgSrc={bgSrc} bgColor={bgColor}/>
            <Grid 
                container
                sx={{
                    maxWidth:'1026px',
                    m:'0 auto',
                    width:'100%',
                    p:'0 30px'
                }}
            >
                <Grid item sm={7} md={9} sx={{position:'relative'}}>
                    <Typography variant="h2" fontSize='5.142857142857143em' lineHeight='1.11' color='#141111' sx={{position:'relative',letterSpacing:'-2px'}} fontWeight='600' fontFamily='Calibre'>
                        {title}
                    </Typography>
                    <Button variant='contained' sx={{lineHeight:'normal'}}>
                        {buttonTitle}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}