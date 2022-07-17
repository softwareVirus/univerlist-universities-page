import React from 'react'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography:{
        fontFamily:["Averta","Calibre"].join(','),
        color:'#666',
        lineHeight: '1.85714286em',
        fontWeightRegular:600
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration:'none'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    width:'100%'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    width:'100%',
                    maxWidth:'787px',
                    borderRadius:'4px',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.12)',
                    border:'none',
                    margin:'0 auto',
                    padding:'8px 8px 8px 32px !important',
                    boxSizing:'border-box',
                },
                input:{
                    height:'64px',
                    boxSizing:'border-box',
                    maxWidth:'787px',
                    width:'100%',
                    padding:'.46428571em !important',
                    paddingLeft:'calc(.92857143em + 56px) !important',
                    fontSize:'24px'
                }
            }
        },
        MuiFormControlLabel:{
            styleOverrides:{
                label: {
                    whiteSpace:'nowrap',
                    overflow:'hidden',
                    width:'100%'
                }
            }
        }
        ,
        MuiTextField: {
            styleOverrides: {
                root: {
                    width:'100%',
                    maxWidth:'787px',
                    position:'relative',
                    left:'15px'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                outlined: {
                    height:'calc(100% - 32px)',
                    display:'flex',
                    alignItems:'center',
                    paddingLeft:'18px'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor:'#141111 !important',
                    boxShadow:'none !important',
                    color:'white',
                    textTransform:'none',
                    fontSize:'16px',
                    fontWeight:'600',
                    borderRadius:'24px',
                    padding:'10px 31px',
                    marginTop:'40px',
                    height:'48px',
                    minWidth:'none',
                    border:'1px solid #141111'
                }
            },
            defaultProps: {
                disableTouchRipple: true
            }
        },
        MuiTypography: {
            variants: [
                {
                    props:{variant: 'customH3'},
                    style: {
                        fontSize:'32px', 
                        fontWeight:'600',
                        letterSpacing:'-.8px', 
                        fontFamily:'Calibre'
                    }
                },
                {
                    props:{variant: 'customH4'},
                    style: {
                        fontSize:'16px', 
                        fontWeight:'600',
                        letterSpacing:'-.4px', 
                        fontFamily:'Averta'
                    }
                }
            ]
        },
        MuiMenu: {
            styleOverrides:{
                paper: {
                    width:'174px !important'
                }
            }
        }
    },
    breakpoints:{
        values:{
            xs:0,
            sm:576,
            md:768,
            lg:1024,
            xl:1280
        }
    }
})

theme.palette.primary.contrastText = '#0f0f0f'
theme.palette.primary.main = '#0f0f0f'
export { theme }