import React from 'react'
import SummaryCardComponent from './SummaryCardComponent'
import ListingCopmonent from '../components/ListingComponent'
import SidePanel from '../components/SidePanel'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ListingComponent() {
  return (
    <div className='mx-1'>

        <Box sx={{ flexGrow: 1 }}>

          {/* grid items here can be added and MUI will calculate the total width and
          would auto flush out of bounds (12 units max per row) to the next line :) */}
          <Grid container spacing={2}>
            {/*  */}
            <Grid item xs={9}>
              <Item sx={{ height: '1100px'}}>
                <SummaryCardComponent></SummaryCardComponent>
              </Item>
            </Grid>
            <Grid  item xs={3}>
              <SidePanel></SidePanel>
            </Grid>
            

          </Grid>

          

          
        </Box>
        
    </div>
  )
}

export default ListingComponent