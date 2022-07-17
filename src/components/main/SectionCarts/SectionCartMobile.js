import React from 'react'
import { Grid,Button,Typography } from '@mui/material'

const SectionCartMobile = ({bgSrc,bgColor,title,buttonTitle}) => {
  return (
      <Grid sx={{bgcolor:bgColor,height:376,position:'relative'}}>
        <Grid 
          sx={{
            position:'absolute',
            height:'100%',
            top:0,
            left:0,
            backgroundImage:'url('+bgSrc+')',
            backgroundSize:'cover',
            backgroundPosition:'50% 50%',
            zIndex:0,
            width:'100%'
          }}
        />
        <Grid
          sx={{
            maxWidth:['100%',540],
            p:['0 16px','0 15px'],
            m:'0 auto',
            pt:'40px !important',
            position:'relative',
            zIndex:2
          }}
        >
          <Grid>
            <Typography variant='customH3'>
              {title}
            </Typography>
          </Grid>
          <Button variant='contained' sx={{lineHeight:'normal'}}>
            {buttonTitle}
          </Button>
        </Grid>
      </Grid>
  )
}

export default SectionCartMobile