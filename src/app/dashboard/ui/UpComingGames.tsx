import React from 'react'
import { Grid, Typography, Container, Box, ListItem, List } from '@mui/material'
import Card from './Card'




const UpComingGames = () => {
  const cardStyles = [
    {
      backgroundColor: '#4299E1',
      boxShadow: '#2778bb85 5px 3px, #226ba785 11px 6px',
    },
    { backgroundColor: '#ED64A6', boxShadow: '#d552918c 5px 3px, #ab376f8c 11px 6px' },
    { backgroundColor: '#9F7AEA', boxShadow: '#7f59cb8a 5px 3px, #5835a18f 11px 6px' },
  ];
  return (
    <>
      <Container sx={{
        backgroundColor: '#061F30',
        borderRadius: '10px',
        padding: '16px',
        margin: '20px auto'

      }}>
        <Typography variant='body1' sx={{
          fontSize: '24px'
        }}>
          Upcoming Games
        </Typography>
        <Grid container columns={16} justifyContent='space-around' sx={{
          // margin: '20px 0',
          marginTop:'6px',
          
        }}>
          {cardStyles.map((style, index) => (
            <Grid item xs={12} sm={12} md={12} lg={5} xl={6} key={index}>
              <Card backgroundColor={style.backgroundColor} boxShadow={style.boxShadow} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </>
  )
}

export default UpComingGames
