import React from 'react'
import { Grid, Typography,Button } from '@mui/material'
import Slider from './sliderComponent/Slider'

const SliderComponent = ({title,isCountry = true,paddingTop='7em',data,isArticle = false}) => {
  return (
      <Grid container sx={{pt:paddingTop,pb:'75px'}} justifyContent={'center'}>
          <Grid item container xl={10} xs={11.5}
            sx={{
                p:['0 5px ','0 22px'],
                '@media (min-width: 1280px)':{
                    maxWidth:'1208.33px'
                },
                maxWidth:['100%','540px','600px','800px'],
                mb: isArticle ? '0px' : '39px',
                justifyContent:'center'
            }}>
              <Grid item xs={12} container justifyContent={'space-between'}>
                <Typography 
                  variant='customH3' 
                  sx={{
                    textAlign:'left',
                    '@media(max-width: 1450px and min-width: 1280px)': {
                      ml:7
                    }
                  }}>
                  {isArticle ? 'Articles': isCountry ? 'Countries' : 'Universities in ' + title}
                </Typography> 
                {
                  (isCountry || isArticle) &&
                  <Button variant='contained' sx={{bgcolor:'#def1f5 !important',border:'0',p:'0 1.7142857142857142rem',height:'27px',mt:0}}>
                      <Typography variant='body1' color='#141111' fontSize='16px' letterSpacing='.-2px' lineHeight='1.63'>
                        Show all →
                      </Typography>
                  </Button>
                }
              </Grid>
          </Grid> 
          <Slider data={data} isArticle={isArticle}/>
      </Grid>
  )
}

export default SliderComponent