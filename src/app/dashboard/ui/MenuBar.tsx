import React, { useState } from 'react';
import { AppBar, Container, Box, Select, MenuItem, FormControl, Typography } from '@mui/material';
import { FaEthereum } from "react-icons/fa6";

import { IoTicketOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { IoWalletOutline, IoLogOutOutline } from 'react-icons/io5';
import Image from 'next/image';

const MenuBar = () => {
    const [ethValue, setEthValue] = useState('');
    const [profileValue, setProfileValue] = useState('');

    const handleEthChange = (event:any) => {
        setEthValue(event.target.value);
    };

    const handleProfileChange = (event:any) => {
        setProfileValue(event.target.value);
    };



    return (
        <Container>
            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                marginTop: '15px',
                marginBottom: '60px'
            }}>
                <FormControl sx={{
                    m: 1, minWidth: 170, border: '1px solid #10344c', background: '#061F30', borderRadius: '12px', overflow: 'hidden',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'transparent',
                    },

                }}>
                    <Select
                        value={ethValue}
                        onChange={handleEthChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                        displayEmpty
                        sx={{
                            border: 'none',

                            '.MuiSelect-icon': {
                                color: '#fff',
                            },
                            '.MuiSelect-select': {
                                display: 'flex',
                                alignItems: 'center',
                                color: '#fff',
                                fontSize: '18px',
                                padding: '8px 16px',
                            },
                        }}
                    >
                        <Box value="" sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 16px',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <FaEthereum style={{ color: '#7CA9FF', marginRight: '8px' }} />
                                <em>12.0503</em>
                            </Box>
                            <Box sx={{
                                color: '#fff',
                                marginLeft: '16px',
                            }}>
                                ETH
                            </Box>
                        </Box>
                        <MenuItem value={10}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <FaEthereum style={{ color: '#7CA9FF', marginRight: '8px' }} />
                                <em>10.0000</em>
                                <Box sx={{
                                    color: '#fff',
                                    marginLeft: '16px',
                                }}>
                                    ETH
                                </Box>
                            </Box>
                        </MenuItem>
                        <MenuItem value={20}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <FaEthereum style={{ color: '#7CA9FF', marginRight: '8px' }} />
                                <em>20.0000</em>
                                <Box sx={{
                                    color: '#fff',
                                    marginLeft: '16px',
                                }}>
                                    ETH
                                </Box>
                            </Box>
                        </MenuItem>
                        <MenuItem value={30}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <FaEthereum style={{ color: '#7CA9FF', marginRight: '8px' }} />
                                <em>30.0000</em>
                                <Box sx={{
                                    color: '#fff',
                                    marginLeft: '16px',
                                }}>
                                    ETH
                                </Box>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>

                {/* Tickets */}
                <Box sx={{
                    display: 'flex',
                    margin: '10px 10px',
                }}>
                    <Box sx={{
                        color: '#FF351A',
                        paddingTop: '13px',
                        paddingLeft: '13px',
                        paddingRight: '13px',
                        // border:'1px solid #ff351a8c',
                        borderRadius: '100px',
                        backgroundColor: '#ff351a8c',
                        fontSize: '20px',
                        marginLeft: ' 10px',
                        marginRight: '5px',
                        position: 'relative',
                        '&::after': {
                            content: '"-"', // Change this to '-' for a minus symbol
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12px',
                            height: '12px',
                            backgroundColor: '#FF351A',
                            borderRadius: '30%',
                            position: 'absolute',
                            bottom: '0',
                            right: '-3px',
                            color: '#000',
                            fontSize: '12px',
                        },
                    }}>
                        <IoTicketOutline />

                    </Box>
                    <Box sx={{
                        marginTop: '7px'
                    }}>
                        <Typography sx={{
                            fontSize: '20px',
                            lineHeight: '12px'
                        }}>55</Typography>
                        <Typography sx={{
                            fontSize: '15px',
                            lineHeight: '17px'
                        }}>Tickets</Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    margin: '10px 10px',
                }}>
                    <Box sx={{
                        color: '#58FF69',
                        paddingTop: '13px',
                        paddingLeft: '13px',
                        paddingRight: '13px',
                        // border:'1px solid #ff351a8c',
                        borderRadius: '100px',
                        backgroundColor: '#58ff697a',
                        fontSize: '20px',
                        marginLeft: ' 10px',
                        marginRight: '5px',
                        position: 'relative',
                        '&::after': {
                            content: '"+"', // Change this to '-' for a minus symbol
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12px',
                            height: '12px',
                            backgroundColor: '#58FF69',
                            borderRadius: '30%',
                            position: 'absolute',
                            bottom: '0',
                            right: '-3px',
                            color: '#000',
                            fontSize: '12px',
                        },
                    }}>
                        <IoDiamondOutline />


                    </Box>
                    <Box sx={{
                        marginTop: '7px'
                    }}>
                        <Typography sx={{
                            fontSize: '20px',
                            lineHeight: '12px'
                        }}>205</Typography>
                        <Typography sx={{
                            fontSize: '15px',
                            lineHeight: '17px'
                        }}>Diamonds</Typography>
                    </Box>
                </Box>
                {/* Profile */}
                <FormControl sx={{
                    m: 1, minWidth: 170, border: '1px solid #10344c', background: '#061F30', borderRadius: '50px', overflow: 'hidden',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'transparent',
                    },
                }}>
                    <Select
                        value={profileValue}
                        onChange={handleProfileChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                        displayEmpty
                        sx={{
                            border: 'none',
                            '.MuiSelect-icon': {
                                color: '#fff',
                            },
                            '.MuiSelect-select': {
                                display: 'flex',
                                alignItems: 'center',
                                color: '#fff',
                                fontSize: '18px',
                                padding: '8px 16px',
                            },
                        }}
                    >
                        <Box value="" sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 16px',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Image
                                    src="/user.png" // Replace with the actual path to the profile image
                                    alt="Profile"
                                    width={100}
                                    height={101}
                                    style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '8px' }}
                                />
                                <span>User Name</span>
                            </Box>
                        </Box>

                        <MenuItem value="wallet">
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <IoWalletOutline style={{ color: '#7CA9FF', marginRight: '8px' }} />
                                <span>Wallet</span>
                            </Box>
                        </MenuItem>
                        <MenuItem value="logout">
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <IoLogOutOutline style={{ color: '#7CA9FF', marginRight: '8px' }} />
                                <span>Logout</span>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Container>
    );
};

export default MenuBar;
