import React from 'react'
import {Box, Typography, List, ListItem, Button,} from '@mui/material'
import MainButton from '@/app/(components)/MainButton'


const Card = ({backgroundColor, boxShadow}:{
    backgroundColor:string,
    boxShadow:string
}) => {
  return (
    <>
       <Box sx={{
            backgroundColor,
            padding: '6px 20px',
            borderRadius: '10px',
            boxShadow,
          }}>
            {/* Heading */}
            <Typography sx={{
              fontSize: '14px',
              padding: '10px 10px'
            }}>
              Crypto
            </Typography>
            {/* LIst Item */}
            <Box>
                <Typography sx={{
                  fontSize:'16px',
                  lineHeight:'16px'
                }}>
                Lorem ipsum dolor sit amit. Lorem ipsum dolor sit amit.
                </Typography>
           
            </Box>
            <Typography variant='h6' sx={{
                  padding:'15px 0',
                  fontSize:'13px',
                  lineHeight:'33px'
                }}>
                1 of 3 Session | 13min
                </Typography>
            <Box>
                <Button sx={{
                    border:'2px solid yellow',
                    borderRadius:'30px',
                    fontSize:'14px',
                    textTransform:'capitalize',
                    color:'white',
                    padding:'0px 10px',
                    marginBottom:'20px'
                }}>
                    Comming Soon
                </Button>
            </Box>
          </Box>
    </>
  )
}

export default Card
