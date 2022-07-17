import React from 'react'
import { Grid, Chip, Button, Link, Typography, IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterDropDownMenu from './FilterDropDownMenu'
import ClearIcon from '@mui/icons-material/Clear';


const FilterChip = ({id,title,open,anchorEl,setAnchorEl,filters,setFilters,filterState}) => {
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const nameCreater = (str) => {
      return str.length > 10 ? str.slice(0,10)+'...' : str
  }
  return (
    <React.Fragment>
        <Grid
            sx={{
                p:'.5714285714285714em'
            }}
            id={id}
            aria-controls={open ? "menu-"+id : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
        >
            <Chip 
              key={Math.random()}
              component={Button}
              sx={{
                  p:'0 12px',
                  height:'40px',
                  cursor:'pointer',
                  textTransform:'none',
                  borderRadius:'50px',
                  ':hover':{
                    bgcolor:(filterState.filter.programs.length > 0 && title === 'Program') || (filterState.filter.disciplines.length > 0 && title === 'Discipline') || (filterState.filter.countries.length > 0 && title === 'Country') || (filterState.filter.min_ielts > 0 && title === 'IELTS') || (filterState.filter.min_toefl > 0 && title === 'TOEFL') || (filterState.filter.min_price !== undefined && title === 'Tuition Fee')
                         ?'#141111'
                         :'#d5d3d3',
                    },
                    bgcolor:(filterState.filter.programs.length > 0 && title === 'Program') || (filterState.filter.disciplines.length > 0 && title === 'Discipline') || (filterState.filter.countries.length > 0 && title === 'Country') || (filterState.filter.min_ielts > 0 && title === 'IELTS') || (filterState.filter.min_toefl > 0 && title === 'TOEFL') || (filterState.filter.min_price !== undefined && title === 'Tuition Fee')
                    ?'#141111'
                    : 'rgba(0, 0, 0, 0.08)'
              }}
              label={
                  (
                    <Grid
                        sx={{
                            p:'.5714285714285714em'
                        }}
                    >
                        <Grid container alignItems={'center'}>
                            <Typography variant='customH4'
                                sx={{
                                    color:(filterState.filter.programs.length > 0 && title === 'Program') || (filterState.filter.disciplines.length > 0 && title === 'Discipline') || (filterState.filter.countries.length > 0 && title === 'Country') || (filterState.filter.min_ielts > 0 && title === 'IELTS') || (filterState.filter.min_toefl > 0 && title === 'TOEFL') || (filterState.filter.min_price !== undefined && title === 'Tuition Fee')
                                    ?'#fff'
                                    : '#141111'
                                }}
                            >
                                {
                                    filterState.filter.disciplines.length > 0 && title === 'Discipline' && filterState.filter.disciplines.length > 0
                                    ? (filterState.filter.disciplines.length === 1 ? nameCreater(filters.filter(item => item.pk === filterState.filter.disciplines[0])[0].name) : (filterState.filter.disciplines.length+' '+title))
                                    :filterState.filter.programs.length > 0 && title === 'Program' && filterState.filter.programs.length > 0
                                    ? (filterState.filter.programs.length === 1 ? nameCreater(filters.filter(item => item.pk === filterState.filter.programs[0])[0].name) : (filterState.filter.programs.length+' '+title))
                                    :filterState.filter.countries.length > 0 && title === 'Country' && filterState.filter.countries.length > 0
                                    ? (filterState.filter.countries.length === 1 ? nameCreater(filters.filter(item => item.pk === filterState.filter.countries[0])[0].name) : (filterState.filter.countries.length+' '+title))
                                    :(filterState.filter.min_ielts > 0 && title === 'IELTS')
                                    ?(filterState.filter.min_ielts+' IELTS')
                                    :(filterState.filter.min_toefl > 0 && title === 'TOEFL')
                                    ?(filterState.filter.min_toefl+' TOEFL')
                                    :(filterState.filter.min_price !== undefined && title === 'Tuition Fee')
                                    ?(filterState.filter.min_price +'-'+filterState.filter.max_price+' TRY')
                                    :title
                                }   
                            </Typography>
                            {
                                (filterState.filter.programs.length > 0 && title === 'Program') || (filterState.filter.disciplines.length > 0 && title === 'Discipline') || (filterState.filter.countries.length > 0 && title === 'Country') || (filterState.filter.min_ielts > 0 && title === 'IELTS') || (filterState.filter.min_toefl > 0 && title === 'TOEFL') || (filterState.filter.min_price !== undefined && title === 'Tuition Fee')
                                ?
                                <IconButton sx={{pr:0}}>
                                    <ClearIcon 
                                    sx={{
                                        ml:0.5,
                                        width:'20px',
                                        color:'#fff',
                                        top:1,
                                        position:'relative'
                                    }}
                                    onClick={() => {
                                        if(title === 'Program')
                                            filterState.setFilter({...filterState.filter,programs:[]})        
                                        else if(title === 'Discipline') 
                                            filterState.setFilter({...filterState.filter,disciplines:[]})
                                        else if(title === 'Country')
                                            filterState.setFilter({...filterState.filter,countries:[]})  
                                        
                                        if(title !== 'TOEFL' && title !== 'IELTS' && title !== 'Tuition Fee') {
                                            let array = filters.map(item => item = {...item,isCheck:false})
                                            setFilters(array)
                                        } else {
                                            if(title === 'TOEFL')
                                                filterState.setFilter({...filterState.filter,min_toefl:0})
                                            else if(title === 'IELTS')
                                                filterState.setFilter({...filterState.filter,min_ielts:0})    
                                            else {
                                                let new_object = filterState.filter
                                                delete new_object.min_price
                                                delete new_object.max_price
                                                filterState.setDeleteFilter(!filterState.deleteFilter)
                                                filterState.setFilter(new_object)
                                            }
                                        }
                                    }}
                                    />
                                </IconButton>
                                :
                                <KeyboardArrowDownIcon 
                                  sx={{
                                      ml:0.5,
                                      width:'20px '
                                  }}
                                />
                            }
                        </Grid>
                    </Grid>
                  )
              }
            />
        </Grid>
        <FilterDropDownMenu setFilters={setFilters} title={title} anchorEl={anchorEl} setAnchorEl={setAnchorEl} id={id} filters={filters} filterState={filterState}/>
    </React.Fragment>
  )
}

export default FilterChip