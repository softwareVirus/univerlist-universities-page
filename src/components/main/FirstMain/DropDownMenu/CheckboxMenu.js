import React, { Fragment, useState } from 'react'
import {Grid, Typography, TextField,Button, FormControlLabel, Link, Checkbox} from '@mui/material'
import axios from 'axios'

const CheckboxMenu = ({title,filters,setFilters,handleClose,filterState}) => {
  const [all, setAll] = useState(true)
  const [page, setPage] = useState(2)
  const [search,setSearch] = useState('')
  const [click,setClick] = useState(false)
  const handleChange = (e) => {
      setSearch(e.target.value)
  }
  return (
    <Grid>
        <Grid container justifyContent={'space-between'} sx={{mb:2}}>
            <Typography variant='customH4'>
                {title}
            </Typography>
            <Grid sx={{textDecoration:!all?'underline':'none',cursor:'pointer'}} onClick={() => {
                filters.map(item => item.isCheck = all)
                setAll(!all)
            }}>
                All
            </Grid>
        </Grid>
        <TextField 
            variant='standard'
            sx={{
                left:0,
                mb:3
            }}
            onChange={(e) => handleChange(e)}
            placeholder={'Search '+(title[title.length-1] === 'y' ? title.slice(0,-1)+'ies' : title+'s')}
        />
        <Grid
            sx={{
                maxHeight:196,
                mb:1,
                width:'100%',
                overflow:'hidden',
                opacity:.75,
                ':hover': {
                    overflowY:'scroll'
                }
            }}
            onScroll={(e) => {
                if(title === 'Program' && e.target.scrollHeight === e.target.scrollTop+196) {
                    axios.get('https://univerlist.com/api/v2/programs-bound-disciplines/?lang=en&page='+(page+1)+'&page_size=16')
                    .then(res => setFilters([...filters,...res.data.results]))
                    setPage(page+1)
                }
            }}
        >
            {
                filters
                &&
                filters.filter(item => item.name.toLowerCase().includes(search)).map(item => (
                    <Grid key={Math.random()}>
                        <FormControlLabel label={item.name} control={<Checkbox checked={item.isCheck} onClick={() => {setClick(!click);item.isCheck = !item.isCheck}}/>} />
                    </Grid>
                ))
            }
        </Grid>
        <Button variant='contained' sx={{width:'100%',borderRadius:1,mt:0}} onClick={() => {
            let array = filters.filter(item => item.isCheck)
            if(title === 'Discipline') 
                filterState.setFilter({...filterState.filter,disciplines:array.map(item => item = item.pk)})
            else if(title === 'Program')
                filterState.setFilter({...filterState.filter,programs:array.map(item => item = item.pk)})
            else if(title === 'Country')
                filterState.setFilter({...filterState.filter,countries:array.map(item => item = item.pk)})
            handleClose()
        }} >
            Confirm
        </Button>
    </Grid>
  )
}

export default CheckboxMenu