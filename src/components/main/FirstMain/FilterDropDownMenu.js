import { Button, Checkbox, FormControl, FormControlLabel, Grid, Link, Menu, TextField, Typography, IconButton, Input, styled } from '@mui/material'
import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import CheckboxMenu from './DropDownMenu/CheckboxMenu'
import DeleteIcon from '@mui/icons-material/Delete';
import SlideMenu from './DropDownMenu/SlideMenu';


const FilterDropDownMenu = ({title,anchorEl,setAnchorEl,id,filters,setFilters,filterState}) => {
  const open = Boolean(anchorEl)
  const handleClose = () => {
      setAnchorEl(null)
  }
  return (
    <Menu
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'left'
        }}
        id={"menu-"+id}
        MenuListProps={{
            "aria-labelledby":id,
            sx:{
                p:0
            }
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'left'
        }}
        sx={{
            ml:'.5714285714285714em',
            fontSize:'16px'
        }}
        PaperProps={{
            sx:{
                padding:'1.7142857142857142em',
                width:'285px !important',
                boxSizing:'border-box'
            }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
    >
        {
            title === 'Program' || title === 'Country' || title === 'Discipline'
            ?
            <CheckboxMenu title={title} handleClose={handleClose} filters={filters} setFilters={setFilters} filterState={filterState}/>
            :
            <SlideMenu title={title} max={title === 'IELTS' ? 9 : title === 'TOEFL' ? 120 : 140000} handleClose={handleClose} filters={filters} filterState={filterState}/>
        }
    </Menu>
  )
}

export default FilterDropDownMenu

