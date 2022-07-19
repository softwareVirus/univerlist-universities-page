import React from 'react'
import { Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'

const CartLess = ({data,bgColor}) => {
  const theme = useTheme()
  const widthMd = useMediaQuery(theme.breakpoints.up('md'))
  const widthSm = useMediaQuery(theme.breakpoints.up('sm'))
  console.log(data)
  return (
      <Link to='/' sx={{width:'100%',cursor:'pointer'}}>
          {
              widthSm
              ?
              <Grid container sx={{p:3,borderRadius:.5,width:'100%',bgcolor:bgColor,':hover':{bgcolor:'#f4f2f2',transition:'all .2s ease-out'}}}>
                  <Box 
                   component='img'
                   src={data.thumbnail === null ? 'https://univerlist.com/static/site/images/newDesign/blackFakeIcon.png' : data.thumbnail}
                   sx={{mr:3,borderRadius:.5}}
                  />
                  <Grid container sx={{p:'0 15px',width:'calc(100% - 300px)'}}>
                      <Grid container sx={{flex:1,m:'0 -15px'}} alignItems={'center'}>
                          <Grid item md={8} sx={{borderRight:widthMd && '1px solid #eceaea',p:'0 15px'}}>
                              <Grid>
                                  <Typography variant='customH3' sx={{width:'100%'}}>
                                      {data.name}
                                  </Typography>
                                  <Typography variant='body1' fontFamily={'Averta'} lineHeight='normal' color='#7a7878' letterSpacing={-.2} fontSize={16} sx={{mt:1.875}}>
                                      {((data.province !== null ? data.province+", " : "")+data.country)}
                                  </Typography>
                              </Grid>
                          </Grid>
                          {
                              widthMd
                              &&
                              <Grid item md={4} sx={{p:'0 15px'}} container alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                                  <Typography variant='customH3' textAlign={'center'} sx={{fontSize:[0,0,'25px','32px']}}>
                                    {data.type === 'Private' ? 'Private' : data.average_tuition+'TRY'}
                                  </Typography>
                                  <Typography variant='body1' fontFamily={'Averta'} lineHeight='normal' color='#7a7878' letterSpacing={-.2} fontSize={16} sx={{mt:0.375}}>
                                    {data.type === 'Private' ? 'Type' : 'Tution'}
                                  </Typography>
                              </Grid>
                          }
                      </Grid>
                  </Grid>
                </Grid>
                :
                <Grid container alignItems={'center'} sx={{mt:8,mb:4,bgcolor:bgColor,p:'24px 36px',':hover':{bgcolor:'#f4f2f2',transition:'all .2s ease-out'}}}>
                    <Box 
                     component='img'
                     src={data.thumbnail === null ? 'https://univerlist.com/static/site/images/newDesign/blackFakeIcon.png' : data.thumbnail}
                     sx={{width:'100%',borderRadius:.5}}
                    />
                    <Grid sx={{mt:2}}>
                        <Typography variant='customH3' sx={{width:'100%'}}>
                            {data.name}
                        </Typography>
                        <Typography variant='body1' fontFamily={'Averta'} lineHeight='normal' color='#7a7878' letterSpacing={-.2} fontSize={16} sx={{mt:1.875}}>
                            {(((data.province !== null ? data.province+", " : "")+data.country)}
                        </Typography>
                    </Grid>
                </Grid>
          }
      </Link>
  )
}

export default CartLess
