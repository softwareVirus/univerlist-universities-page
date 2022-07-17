import { Button, Grid, Link, Typography, Menu, MenuItem, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import DownArrow from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/system';

const Footer = () => {
  const theme = useTheme()
  const width = useMediaQuery(theme.breakpoints.up('md'))
  const [choseLanguage, setChoseLanguage] = useState('English')
  const [choseCurrency, setChoseCurrency] = useState('TRY')
  const [anchorEl1, setAnchorEl1] = useState(null)
  const open1 = Boolean(anchorEl1)
  const [anchorEl2, setAnchorEl2] = useState(null)
  const open2 = Boolean(anchorEl2)
  const handleClick1 = (e) => {
    setAnchorEl1(e.currentTarget)
  }
  const handleClick2 = (e) => {
    setAnchorEl2(e.currentTarget)
  }
  const handleClose1 = () => {
      setAnchorEl1(null)
  }
  const handleClose2 = () => {
      setAnchorEl2(null)
  }
  return (
      <Grid
        sx={{
            borderTop:'none',
            background:'#f4f2f2',
            p:0,
            pb:'13px',
        }}
      >
          <Grid
            container
            sx={{
                p:'72px 15px 24px 15px',
                '@media (min-width: 1200px)':{
                    maxWidth:'1226px'
                },
                maxWidth:['100%','540px','720px','960px'],
                m:'0 auto'
            }}
          >
            <Grid container justifyContent={'space-between'} sx={{m:'0 -15px'}}>
                {
                    footerOptions.map(item => {
                        if(typeof item[0] !== 'object' && item[0] !== 'Legal') {
                            return(
                                <Grid item sm={'auto'} sx={{p:'0 15px',flex:['0 0 100%','0 0 auto'],width:'100%',maxWidth:['100%','none']}} key={Math.random()}>
                                    <Grid sx={{mb:'17px'}}>
                                        <Typography variant='customH3' sx={{}}>
                                            {item[0]}
                                        </Typography>
                                        
                                    </Grid>
                                    {
                                        item.slice(1,item.length).map(x => (
                                            <Grid key={Math.random()}>
                                                <Link to='/' sx={{display:'block',mb:2.5,cursor:'pointer'}}>
                                                    <Typography variant='body1' sx={{fontWeight:'600',lineHeight:'normal',color:'#7a7878',letterSpacing:'-.2px',fontSize:'16px',width:'100%'}}>
                                                        {
                                                            x.slice(-1) === '!' 
                                                            ?
                                                            <Grid>
                                                                {x.slice(0,-1)}
                                                                <Button variant='contained' sx={{p:'3px 6px',m:0,fontSize:'12px',lineHeight:'normal',ml:'7px',mb:'4px',borderRadius:'4px',minWidth:'0',height:'auto'}}>
                                                                    NEW
                                                                </Button>
                                                            </Grid>
                                                            :
                                                            x
                                                        }
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            )
                        }
                    })
                }

                  <Grid item sm={'auto'} sx={{p:'0 15px'}}>
                    <Grid>
                        <Grid sx={{mb:'7px'}}>
                        <Typography variant='customH3' sx={{lineHeight:'normal'}}>
                            Language
                        </Typography>
                        </Grid>
                        <Grid   
                            id="language"
                            aria-controls={open1 ? "menu-language" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open1 ? "true" : undefined}
                            onClick={handleClick1}
                            sx={{width:'174px',p:'11px 24px',borderRadius:'4px',bgcolor:'#fff',mb:'27px',cursor:'pointer'}}>
                            <Grid container justifyContent={'space-between'} alignItems='center' sx={{fontWeight:'600',color:'#141111',fontFamily:'Averta',fontSize:'14px',letterSpacing:'-.2px',lineHeight:'normal'}}>
                                {choseLanguage}
                                <DownArrow />
                            </Grid>
                        </Grid>
                        <Menu
                            anchorOrigin={{
                                vertical:'bottom',
                                horizontal:'left'
                            }}
                            id="menu-language"
                            MenuListProps={{
                                "aria-labelledby":"language"
                            }}
                            transformOrigin={{
                                vertical:'top',
                                horizontal:'left'
                            }}
                            anchorEl={anchorEl1}
                            open={open1}
                            onClose={handleClose1}
                        >
                                {
                                    footerOptions[4][0][1].map(item => (
                                        <MenuItem disableTouchRipple key={Math.random()} onClick={() => {setChoseLanguage(item);handleClose1()}}>
                                            {item}
                                        </MenuItem>
                                    )) 
                                }
                        </Menu>
                    </Grid>
                    <Grid>
                        <Grid sx={{mb:'7px'}}>
                            <Typography variant='customH3' sx={{lineHeight:'normal'}}>
                                Currency
                            </Typography>
                        </Grid>
                        <Grid   
                            id="currency"
                            aria-controls={open2 ? "menu-currency" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open2 ? "true" : undefined}
                            onClick={handleClick2}
                            sx={{width:'174px',p:'11px 24px',borderRadius:'4px',bgcolor:'#fff',mb:'27px',cursor:'pointer'}}>
                            <Grid container justifyContent={'space-between'} alignItems='center' sx={{fontWeight:'600',color:'#141111',fontFamily:'Averta',fontSize:'14px',letterSpacing:'-.2px',lineHeight:'normal'}}>
                                {choseCurrency}
                                <DownArrow />
                            </Grid>
                        </Grid>
                        <Menu
                            anchorOrigin={{
                                vertical:'bottom',
                                horizontal:'left'
                            }}
                            id="menu-currency"
                            MenuListProps={{
                                "aria-labelledby":"currency"
                            }}
                            transformOrigin={{
                                vertical:'top',
                                horizontal:'left'
                            }}
                            anchorEl={anchorEl2}
                            open={open2}
                            onClose={handleClose2}
                        >
                                {
                                    footerOptions[4][1][1].map(item => (
                                        <MenuItem disableTouchRipple key={Math.random()} onClick={() => {setChoseCurrency(item);handleClose2()}}>
                                            {item}
                                        </MenuItem>
                                    )) 
                                }
                        </Menu>
                    </Grid>
                  </Grid>
                    {
                      !width
                      &&
                      <Grid item sm={'auto'} sx={{p:'0 15px',flex:['0 0 100%','0 0 auto'],width:'100%',maxWidth:['100%','none']}} key={Math.random()}>
                            <Grid sx={{mb:'17px'}}>
                                <Typography variant='customH3' sx={{}}>
                                    Legal
                                </Typography>

                            </Grid>
                            {
                                footerOptions[5].slice(1,footerOptions[5].length).map(x => (
                                    <Grid key={Math.random()}>
                                        <Link to='/' sx={{display:'block',mb:2.5,cursor:'pointer'}}>
                                            <Typography variant='body1' sx={{fontWeight:'600',lineHeight:'normal',color:'#7a7878',letterSpacing:'-.2px',fontSize:'16px',width:'100%'}}>
                                                {x}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    }
              </Grid>
              <Grid container sx={{m:'0 -15px',mt:'84px'}}>
                <Grid container sx={{p:'0 15px',flexBasis:0,flexGrow:1}}>
                  <Typography variant='body1' fontSize='16px' lineHeight={'normal'} letterSpacing={'-.2px'}>
                    © Univerlist
                  </Typography>
                </Grid>
                {
                    width 
                    &&
                    <Grid container sx={{p:'0 15px',width:'auto',flex:'0 0 auto'}}>
                      <Link to='/'>
                        <Typography variant='body1' sx={{mr:'2.857142857142857em'}} fontSize='16px' color='#7a7878' lineHeight={'normal'} letterSpacing={'-.2px'}>
                          User Agreement
                        </Typography>
                      </Link>
                      <Link to='/'>
                        <Typography variant='body1' fontSize='16px' color='#7a7878' lineHeight={'normal'} letterSpacing={'-.2px'}>
                          Privacy Statement
                        </Typography>
                      </Link>
                    </Grid>
                }
              </Grid>
          </Grid>
      </Grid>
  )
}


export default Footer

const footerOptions = [
    ['Univerlist',...("Bachelor's Degree,Master's Degree,Online Degree,Disciplines,Countries".split(','))],
    ['Features',...("Compare,Rankings,News,Jobs!".split(','))],
    ['Company',...("About,Careers,uL Score,Contact,For Universities".split(','))],
    ['Socail',...("Facebook,Twitter,LinkedIn,Youtube,Instagram".split(','))],
    [['Language',["Türkçe","English"]],['Currency',['USD','EUR','TRY','GBP']]],
    ['Legal',...("User Agreement,Privacy Statement".split(','))]
]

