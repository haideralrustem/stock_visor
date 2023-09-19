import React, { useState} from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import Slider from '@mui/material/Slider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





export default function SidePanel() {

  const [value, setValue ] = useState("female");

  const handleChange=(e)=>{
    setValue(e.target.value);
  }

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <>
      <div style={{ position: 'fixed'  }}>
      <Item>

        <Box sx={{ flexGrow: 1 }}>
          {/* grid items here can be added and MUI will calculate the total width and
          would auto flush out of bounds (12 units max per row) to the next line :) */}
          <Grid container spacing={2}>

            {/*  */}
            <Grid item xs={12}>
              <Item >
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Filter One</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                   value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                  />

                </RadioGroup>
              </FormControl>
              </Item>
            </Grid>
            
            {/* next filter */}

            <Grid item xs={12}>
              <Item>
                
              <Box sx={{ width: 300 }}>
                <p class="mt-2 text-base leading-7 text-gray-600">
                  Average Volume
                </p>

                <Slider
                  aria-label="Restricted values"
                  defaultValue={20}
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valuetext}
                  step={null}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Box>

              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>xs=</Item>
            </Grid>
          </Grid>
        </Box>


      </Item>
       
    </div>
      

    </>
  )
}
