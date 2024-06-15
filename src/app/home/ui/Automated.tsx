import { Typography, Container } from '@mui/material'
import React from 'react'

const Automated = () => {
    return (
        <>
            <Container sx={{
                textAlign: 'center',
                border: '1px  solid white',
                marginTop: '100px',
                marginBottom: '10px'
            }}>
                <Typography variant='h6' sx={{
                    fontWeight:'500',
                    letterSpacing:'5px',
                    fontSize:'14px',
                    color:'gray',
                    lineHeight:'47px'
                }}>
                    INDUSTRIES
                </Typography>
                <Typography variant='h3' sx={{ fontFamily: 'Basement Grotesque', fontSize:'62px' }}>
            Automated messaging <br />
            for
            <Typography
                component='span'
                variant='body'
                sx={{ color: 'text.secondary' }}
            >
                {' '}
                any industry.
            </Typography>
        </Typography>
            </Container>
        </>
    )
}

export default Automated
