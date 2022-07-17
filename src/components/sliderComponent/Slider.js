import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Grid from '@mui/material/Grid'
import Cart from '../main/FirstMain/Cart'
import axios from "axios";
import CartArticle from "../main/FirstMain/CartArticle";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
const responsive = {
};

export default function Slider({data,isArticle = false}) {
    const theme = useTheme()
    const width = useMediaQuery(theme.breakpoints.up('md'))
    const [index, setIndex] = useState(0)
    
    const handlePrevButton = (e) => {
        console.log(e.view.outerWidth)
        const pass = e.view.innerWidth > 1450 ? 4 : e.view.innerWidth  > 1280 ? 3 : 2
        setIndex(index < pass ? 0 : index-pass)
    }
    const handleDragStart = (e) => e.preventDefault()
    const handleNextButton = (e) => {
        console.log(e)
        const pass = e.view.innerWidth > 1450 ? 4 : e.view.innerWidth  > 1280 ? 3 : 2
        setIndex(index + pass >= data.length ? data.length-1 : index+pass)
    }
  return (
    <Grid container justifyContent={'center'} sx={{mt:isArticle ? '32px' : 0}}>
        <Grid container justifyContent={'center'}
            sx={{
                maxWidth:['100%','540px','720px','960px','1450px'],
            }}
        >
        
            {
                width 
                &&
                <Grid item sm={1} container justifyContent={'flex-end'} alignItems={'center'}>
                    <Button onClick={(e) => handlePrevButton(e)}
                        disabled={index === 0}
                        sx={{width:'39px',height:'78px',p:0,minWidth:0,position:'relative',top:-25,right:10}}
                        disableTouchRipple

                    >
                        <svg viewBox="0 0 100 100" style={{width:'60%',height:'80%',fontWeight:'400'}}><path fill={index === 0 ? 'grey' : 'initial'} d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>
                    </Button>
                </Grid>
            }
            <Grid item md={10} xs={12}>
            <AliceCarousel 
                activeIndex={index}
                disableDotsControls
                disableButtonsControls
                autoPlay={false}
                autoWidth
                mouseTracking
                responsive={responsive} 
                items={data.map(item => {
                    return(
                        <Cart data={item} width={'276px !important'} onDragStart={handleDragStart} height={'184px !important'} marginBottom={0} isArticle={isArticle}/>
                    )
                })} 
            />
            </Grid>
            
            {
                width &&
                <Grid item sm={1} container justifyContent={'flex-start'} alignItems={'center'}>
                    <Button onClick={(e) => handleNextButton(e)}
                        disabled={index === data.length-1}
                        sx={{width:'39px',height:'78px',p:0,minWidth:0,position:'relative',top:-25,left:10}}
                        disableTouchRipple
                    >
                        <svg viewBox="0 0 100 100" style={{width:'60%',height:'80%',fontWeight:'400'}}><path fill={index === data.length-1    ? 'grey' : 'initial'} d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>
                    </Button>
                </Grid>
            }
        </Grid>
    </Grid>

  );
}