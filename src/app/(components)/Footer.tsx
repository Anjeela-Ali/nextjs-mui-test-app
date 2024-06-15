import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import MainButton from './MainButton';
import Image from 'next/image';




const Footer = () => {
    return (
        <>
        <Box>
        <Box sx={{
                 display:'flex',
                 justifyContent:'right',
             paddingTop: '20px',
                          margin: 'auto 20px'
            }}>

                <Box>
                    <Image 
                    src='/logo.png'
                    alt='screenshot'
                    width={100}
                    height={101}
                    />
                     <Box sx={{
                        marginTop:'10px',
                        marginRight:'15px'
                    }}>
                        <MainButton title={'Get Start'} onButtonClick={function (param: string): void {
                            throw new Error('Function not implemented.');
                        }} disabled={undefined} />
                    </Box>
                </Box>
                <Box sx={{

                        width:'50% '
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'right',
                    }}>
                        <Box sx={{
                            paddingRight: '15px'
                        }}>
                            <FaFacebookF size={40} />
                        </Box>
                        <Box sx={{
                            paddingRight: '15px'
                        }}>
                            <FaInstagram size={40} />
                        </Box>
                        <Box sx={{
                            paddingRight: '15px'
                        }}>
                            <FaLinkedinIn size={40} />
                        </Box>

                    </Box>
                    <Box sx={{
                        display: 'flex',
                        color: 'gray',
                        margin: '40px auto',
                        justifyContent:'right'

                    }}>
                        <Typography variant='body2' sx={{
                            paddingRight: '20px',
                            fontSize: '15px'
                        }}>
                            Privacy Policy
                        </Typography>
                        <Typography variant='body2' sx={{
                            paddingRight: '20px',
                            fontSize: '15px'
                        }}>
                            Terms
                        </Typography>
                        <Typography variant='body2' sx={{
                            fontSize: '15px'
                        }}>
                            Legal
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
                </>
    )
}

export default Footer
