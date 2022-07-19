import React, { useState } from 'react'
import { Grid, Typography, IconButton, styled, Slider, Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const PrettoSlider = styled(Slider)(({theme}) => ({
    color: theme.palette.primary.main,
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  }));


const OutlinedNumberInput = styled('input')(({theme}) => ({
    border:'1px solid #ececec',
    boxSizing:'border-box',
    height:'2em',
    fontSize:'14px',
    maxWidth:60,
    padding:'.46428571em',
    paddingLeft:'.92857143em'
}))

const SlideMenu = ({title, max, filters, filterState, handleClose}) => {
  const [value, setValue] = useState(title === 'IELTS' ? filterState.filter.min_ielts : title === 'TOEFL' ? filterState.filter.min_toefl : filterState.filter.min_price === undefined ? [30000,120000] : [filterState.filter.min_price,filterState.filter.max_price])
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDoubleSlideChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([newValue[0] >= value[1] ? value[1] : newValue[0], value[1]]);
    } else {
      setValue([value[0], newValue[1] <= value[0] ? value[0] : newValue[1]]);
    }
  };

  return (
    <Grid>
        <Grid container justifyContent={'space-between'} sx={{mb:2}}>
            <Typography variant='customH4'>
                {title}
            </Typography>
            <IconButton onClick={() => {
                setValue(title !== 'Tuition Fee' ? 0 : [0,max])
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
            }}>
                <DeleteIcon />
            </IconButton>
        </Grid>
        <Grid >
            {
                title !== 'Tuition Fee'
                ?
                <Grid>
                    <Typography variant='body1' fontWeight={400} sx={{mb:1.5}}>
                        Max. Score: <OutlinedNumberInput value={value} onChange={handleInputChange} defaultValue={0} type={'number'} min={0} max={max}/>
                    </Typography>
                    <Grid container sx={{mb:1.5}} alignItems={'center'} justifyContent={'center'}>
                        0
                        <PrettoSlider value={value} onChange={handleSliderChange} step={title === 'IELTS' ? 0.5 : 1} min={0} max={max} sx={{width:'71%',m:'0 15px',position:'relative',top:1}} />
                        {max}  
                    </Grid>
                </Grid>
                :
                <Grid>
                    <Grid container justifyContent={'space-between'}>
                        <Typography variant='body1'>
                            {value[0]} TRY
                        </Typography>
                        <Typography variant='body1'>
                            {value[1]} TRY
                        </Typography>
                    </Grid>
                    <PrettoSlider step={1000} value={value} min={0} max={140000} onChange={handleDoubleSlideChange} />
                </Grid>
            }
        </Grid>

        <Button variant='contained' sx={{width:'100%',borderRadius:1,mt:0}} onClick={() => {
            if(title === 'IELTS') 
                filterState.setFilter({...filterState.filter,min_ielts:value})
            else if(title === 'TOEFL')
                filterState.setFilter({...filterState.filter,min_toefl:value})
            else 
                filterState.setFilter({...filterState.filter,min_price:value[0],max_price:value[1]})
            handleClose()
        }} >
            Confirm
        </Button>
    </Grid>
  )
}

export default SlideMenu
