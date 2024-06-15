import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import StatsCard from './RateCards';
import { Colors } from '@/app/theme/colors';
import Image from 'next/image';

const StatsSection = () => {
    return (
        <>
            <Box sx={{
                padding: { xs: 2, sm: 4, md: 6 }
            }}>
                <Box maxWidth="1100px" sx={{
                    margin: '60px auto',
                    backgroundColor: Colors.background.paper,
                    borderRadius: '20px',
                    padding: '30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingLeft: '20px'
                    }}>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item xs={12} sm={4} sx={{
                                paddingLeft: '27px',
                                position: 'relative',
                                '&:not(:last-child)::after': {
                                    content: '""',
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    height: '50%', // Adjust this to make the border smaller
                                    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                                }

                            }}>
                                <StatsCard number="400k" text="Loved Trusted users & communities." />
                            </Grid>
                            <Grid item xs={12} sm={4} sx={{
                                position: 'relative',
                                '&:not(:last-child)::after': {
                                    content: '""',
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    height: '50%', // Adjust this to make the border smaller
                                    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                                }
                            }}>
                                <StatsCard number="400k" text="Loved Trusted users & communities." />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <StatsCard number="400k" text="Loved Trusted users & communities." />
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Box>
            <Box sx={{
                marginBottom: '20px'
            }}>
                <Image
                    src='/box.png'
                    alt=''
                    width={2200}
                    height={100}
                />
            </Box>
        </>



    );
};

export default StatsSection;
