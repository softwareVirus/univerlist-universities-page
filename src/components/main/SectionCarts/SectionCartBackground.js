import React from 'react'
import Grid from '@mui/material/Grid'


const SectionCart = ({bgSrc,bgColor,bgPosition='50% 50%'}) => {
  return (
    <Grid 
      sx={{
        backgroundImage:'url('+bgSrc+')',
        width:'100%',
        height:'100%',
        position:'absolute',
        backgroundSize:'contain !important',
        backgroundRepeat:'no-repeat',
        backgroundColor:bgColor+' !important',
        backgroundPosition:bgPosition,
        top:0,
        left:0
      }}
    />
  )
}

export default SectionCart