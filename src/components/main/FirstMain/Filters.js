import { Chip, Grid, Link, Typography, useMediaQuery, Button } from '@mui/material'
import {useTheme} from '@mui/material/styles'
import React, { useState, useEffect, Fragment } from 'react'
import FilterChip from './FilterChip'
import axios from 'axios'



const Filters = ({filter,setFilter,deleteFilter,setDeleteFilter}) => {
  const theme = useTheme()
  const width = useMediaQuery(theme.breakpoints.up('md'))
  const [moreFilters, setMoreFilters] = useState(false)
  const [anchorEl1, setAnchorEl1] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)
  const [anchorEl3, setAnchorEl3] = useState(null)
  const [anchorEl4, setAnchorEl4] = useState(null)
  const [anchorEl5, setAnchorEl5] = useState(null)
  const [anchorEl6, setAnchorEl6] = useState(null)
  const [disciplineFilters,setDisciplineFilters] = useState([])
  const [programFilters,setProgramFilters] = useState([])
  const [countryFilters,setCountryFilters] = useState([])
  useEffect(() => {
    axios.get('https://univerlist.com/api/v2/programs/?lang=en')
    .then(response => {
        response.data.results.forEach(item => {
            item.isCheck = false
        })
        setDisciplineFilters(response.data.results)

        axios.get('https://univerlist.com/api/v2/programs-bound-disciplines/?lang=en&page_size=16')
        .then(response => {
            response.data.results.forEach(item => {
                item.isCheck = false
            })
            setProgramFilters(response.data.results)
            axios.get('https://univerlist.com/api/v2/country/?lang=en&page_size=144')
            .then(response => {
                response.data.results.forEach(item => {
                    item.isCheck = false
                })
                setCountryFilters(response.data.results)
            })
        })
    })
  },[])
  return (
      <Grid
        sx={{
            maxWidth:800,
            m:'0 auto',
            mt:2.125,
        }}
      >
          <Grid
            sx={{
                m:'0 -.5714285714285714em'
            }}
            container
          >
              {
                  filtersInfos.slice(0,3).map(item => {
                    return(
                        <Grid
                            sx={{
                                p:'.5714285714285714em'
                            }}
                            key={Math.random()}
                        >
                            <Chip   
                              sx={{
                                  p:'0 12px',
                                  height:'40px',
                                  cursor:'pointer',
                                  textTransform:'none',
                                  borderRadius:'50px',
                                  ':hover':{
                                      bgcolor:filter.has_bachelor && item[0].includes('Bachelor')
                                       ?'#141111'
                                       :filter.has_master && item[0].includes('Master')
                                       ? '#141111' 
                                       :filter.has_online && item[0].includes('Online')
                                       ? '#141111' 
                                       :'#d5d3d3',
                                  },
                                  bgcolor:filter.has_bachelor && item[0].includes('Bachelor')
                                  ?'#141111'
                                  :filter.has_master && item[0].includes('Master')
                                  ? '#141111' 
                                  :filter.has_online && item[0].includes('Online')
                                  ? '#141111'  
                                  : 'rgba(0, 0, 0, 0.08)'
                              }}
                              clickable={false}
                              onClick={(e) => {
                                  if(e.target.innerText.includes('Bachelor')) {
                                      setFilter({...filter,has_bachelor:!filter.has_bachelor})
                                  } else if(e.target.innerText.includes('Master')) {
                                    setFilter({...filter,has_master:!filter.has_master})
                                  } else
                                  setFilter({...filter,has_online:!filter.has_online}) 
                                  
                              }}
                              label={
                                  (
                                      width
                                      ?
                                      <Link to='/'>
                                          <Typography variant='customH4' 
                                          color={filter.has_bachelor && item[0].includes('Bachelor')
                                                 ?'#fff'
                                                 :filter.has_master && item[0].includes('Master')
                                                 ? '#fff' 
                                                 :filter.has_online && item[0].includes('Online')
                                                 ? '#fff'   : '#141111'}
                                           >
                                              {item[1]}
                                          </Typography>
                                      </Link>
                                      :
                                      <Link to='/'>
                                          <Typography variant='customH4'
                                          color={filter.has_bachelor && item[0].includes('Bachelor')
                                          ?'#fff'
                                          :filter.has_master && item[0].includes('Master')
                                          ? '#fff' 
                                          :filter.has_online && item[0].includes('Online')
                                          ? '#fff'   : '#141111'}
                                          >
                                              {item[0]}
                                          </Typography>
                                      </Link>
                                  )
                              }
                            />
                        </Grid>
                      )
                  })
              }
              <FilterChip filters={disciplineFilters} filterOptions={filter} filterState={{filter:filter,setFilter:setFilter}} setFilters={setDisciplineFilters} id={filtersInfos[3][2]} title={filtersInfos[3][0]} open={Boolean(anchorEl1)} setAnchorEl={setAnchorEl1} anchorEl={anchorEl1} />
              <FilterChip filters={programFilters} filterState={{filter:filter,setFilter:setFilter}} setFilters={setProgramFilters} id={filtersInfos[4][2]} title={filtersInfos[4][0]} open={Boolean(anchorEl2)} setAnchorEl={setAnchorEl2} anchorEl={anchorEl2} />
              <FilterChip filters={countryFilters} filterState={{filter:filter,setFilter:setFilter}} setFilters={setCountryFilters} id={filtersInfos[5][2]} title={filtersInfos[5][0]} open={Boolean(anchorEl3)} setAnchorEl={setAnchorEl3} anchorEl={anchorEl3} />
              {
                  moreFilters
                  &&
                  <Fragment>  
                    <FilterChip id={filtersInfos[6][2]} filterState={{filter:filter,setFilter:setFilter}} title={filtersInfos[6][0]} open={Boolean(anchorEl4)} setAnchorEl={setAnchorEl4} anchorEl={anchorEl4} />
                    <FilterChip id={filtersInfos[7][2]} filterState={{filter:filter,setFilter:setFilter}} title={filtersInfos[7][0]} open={Boolean(anchorEl5)} setAnchorEl={setAnchorEl5} anchorEl={anchorEl5} />
                    <FilterChip id={filtersInfos[8][2]} filterState={{filter:filter,setFilter:setFilter,deleteFilter:deleteFilter,setDeleteFilter:setDeleteFilter}} title={filtersInfos[8][0]} open={Boolean(anchorEl6)} setAnchorEl={setAnchorEl6} anchorEl={anchorEl6} />
                  </Fragment>
              }
              <Grid
                  sx={{
                      p:'.5714285714285714em'
                  }}
              >
                  <Chip 
                    key={Math.random()}
                    onClick={() => setMoreFilters(!moreFilters)}
                    clickable={false}

                    sx={{
                        p:'0 12px',
                        height:'40px',
                        cursor:'pointer',
                        textTransform:'none',
                        borderRadius:'50px',
                        ':hover':{
                            bgcolor:'#d5d3d3',
                        }
                    }}
                    label={
                        <Grid container alignItems={'center'}>
                            <Typography variant='customH4'>
                              {
                                  !moreFilters
                                  ?
                                  'More Filters'
                                  :
                                  'Less Filters   '
                              }
                            </Typography>
                        </Grid>
                    }
                  />
              </Grid>
          </Grid>
      </Grid>
  )
}

const filtersInfos = [
    ['Bachelor',"Bachelor's Degree"],
    ['Master',"Master's Degree"],
    ['Online','Online Degree'],
    ['Discipline','','discipline'],
    ['Program','','program'],
    ['Country','','country'],
    ['IELTS','','ielts'],
    ['TOEFL','','toefl'],
    ['Tuition Fee','','tuition-fee'],
    
]

export default Filters