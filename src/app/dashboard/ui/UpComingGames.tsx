import React from 'react'
import { Grid, Typography, Container, Box, ListItem, List } from '@mui/material'
import Card from './Card'




const UpComingGames = () => {
  return (
    <>
    <Container sx={{
      backgroundColor: '#061F30',
      borderRadius: '10px',
      padding: '16px',
      margin:'20px auto'

    }}>
    <Typography variant='body1' sx={{
      fontSize:'24px'
    }}>
      Upcoming Games
    </Typography>
      <Grid container spacing={1} columns={16} justifyContent='space-between' sx={{
        margin: '20px 0',
        border:'1px solid red'
      }}>
        <Grid xs={12} sm={8} lg={5} xl={6} sx={{
        }}>
         <Card />
        </Grid>
        <Grid xs={12} sm={8} lg={5} xl={6} sx={{

       
        }}><Card />
          
        </Grid>
        <Grid xs={12} sm={8} lg={5} xl={6} sx={{

        }}>
        <Card />
        </Grid>
      </Grid>
    </Container>
    
    </>
  )
}

export default UpComingGames
