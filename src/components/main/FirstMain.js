import React, { useEffect, useState } from 'react'
import { Button, Grid,TextField,Typography, useMediaQuery, useTheme } from '@mui/material'
import axios from 'axios'
import { Box } from '@mui/system'
import Cart from './FirstMain/Cart'
import { Search } from '@mui/icons-material'
import Filters from './FirstMain/Filters'
import CartLess from './FirstMain/CartLess'

export default function FirstMain() {
    const [universityDatas, setUniversityDatas] = useState([])
    const [page, setPage] = useState(1)
    const theme = useTheme()
    const width = useMediaQuery(theme.breakpoints.up('md'))
    const widthSm = useMediaQuery(theme.breakpoints.up('sm'))
    const [search, setSearch] = useState('')
    const [deleteFilter,setDeleteFilter] = useState(false)
    const [filter, setFilter] = useState({
        countries:[],
        disciplines:[],
        has_bachelor:false,
        has_master:false,
        has_online:false,
        min_ielts:"0",
        min_toefl:"0",
        programs:[],
    })
    const handleSearch = (e) => {
        setPage(1)
        setSearch(e.target.value)
        axios.post('https://univerlist.com/api/v2/university/search/?lang=en&page='+page+'&page_size=16',{...filter,q:e.target.value})
        .then((response) => setUniversityDatas(response.data.results))

    } 
    const handleClick = () => {
        setPage(page+1)
    } 
    useEffect(() => {
        axios.post('https://univerlist.com/api/v2/university/search/?lang=en&page='+page+'&page_size=16',{...filter,q:search})
        .then((response) => setUniversityDatas(page === 1 ? response.data.results :[...universityDatas,...response.data.results]))
    },[page])

    useEffect(() => {
        setPage(1)
        axios.post('https://univerlist.com/api/v2/university/search/?lang=en&page='+1+'&page_size=16',{...filter,q:search})
        .then((response) => setUniversityDatas(response.data.results))
    },[filter,deleteFilter])
    return(
        <Grid 
          container   
          sx={{
              p:['73.143px 0','71.314px 0','89.600px 0','98px 0'],
              bgcolor:'white'
          }}
          justifyContent={'center'}  
        >
            <Grid sx={{
                width:'100%',
                '@media (min-width: 1200px)':{
                    maxWidth:'1226px'
                },
                maxWidth:['100%','540px','720px','960px'],
                
                p:'0 15px',
                m:'0 auto'
            }}> 
                <Grid container flexDirection={'column'} justifyContent={'center'} sx={{position:'relative',right:'15px',mt:2}}>
                    <Typography variant='h5' fontSize={32} letterSpacing={'-.8px'} lineHeight={'normal'} textAlign={'center'} fontFamily={'Calibre'}>
                        Let us find your dream university.
                    </Typography>
                    <Grid sx={{mt:'53px', width:'100%'}} container justifyContent={'center'}>
                        <TextField 
                        variant='outlined' 
                        onChange={(e) => handleSearch(e)} 
                        sx={{caretColor:'#dd2f4d'}} 
                        label={<Grid container alignItems={'center'}>
                                    <Box component='img' src='https://univerlist.com/static/site/images/newDesign/search.svg' sx={{width:'24px',overflow:'hidden',height:'23px'}}/>
                                    {
                                        search === ''
                                        &&
                                        <Typography color='#b5b5b5' fontFamily='Averta' fontSize={width ? '27.4px' : '18px'} sx={{pl:'22.5px',pb:'2px'}} letterSpacing={-.3} fontWeight={400}>
                                            Universities, Online programs
                                        </Typography>
                                    }
                                </Grid>}
                          autoFocus  
                          InputLabelProps={{shrink:false}}
                          />
                    </Grid>
                    <Filters filter={filter} setFilter={setFilter} deleteFilter={deleteFilter} setDeleteFilter={setDeleteFilter} />
                    {
                        universityDatas && universityDatas.length > 0
                        ?
                        universityDatas.length >= 3 
                        ?
                        <React.Fragment>
                            <Grid container sx={{mt:widthSm ? '64px' : '8px',width:'calc(100% + 30px)'}}>
                                {universityDatas.map(item => {
                                    return(
                                        <Cart data={item} key={Math.random()} />
                                    )
                                })}
                            </Grid>
                            <Grid container sx={{mt:1}} justifyContent={'center'}>
                                <Button onClick={() => handleClick()} variant='contained' sx={{bgcolor:'#def1f5 !important',border:'0',p:'.42857142857142855rem 1.7142857142857142rem',height:'auto'}}>
                                    <Typography variant='body1' color='#141111' fontSize='16px' letterSpacing='.-2px' lineHeight='1.63'>
                                        Load More
                                    </Typography>
                                </Button>
                            </Grid>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Grid container sx={{mt:widthSm ? '64px' : '8px',width:'calc(100% + 30px)'}}>
                                {universityDatas.map(item => {
                                    return(
                                        <CartLess data={item} bgColor={universityDatas.indexOf(item) === 1 ? '#f4f2f2' : 'inherit'} />
                                    )
                                })}
                            </Grid>
                        </React.Fragment>
                        :
                        <Grid container justifyContent={'center'}>
                            <Typography variant='customH3' sx={{width:'max-content',mt:8}}>
                                No Result Found.
                            </Typography>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}