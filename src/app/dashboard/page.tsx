'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Container, Grid } from '@mui/material';
import SunMoonSwitch from './ui/CustomSwitch';
import CountdownTimer from '../(components)/CountDown';
import { IoTicketOutline } from "react-icons/io5";


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MainButton from '../(components)/MainButton';
import UpComingGames from './ui/UpComingGames';


// Grid Responsiveness

const drawerWidth = 220;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function Dashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box sx={{
      backgroundColor: '#0a1929',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden'
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
      }}>
        <Image
          src='/logo.png'
          alt='logo'
          width={100}
          height={101}
        />
      </Box>
      <List sx={{
        flex: 1, // take up remaining space between top and bottom
      }}>
        {['Home', 'Shop', 'Profile'].map((text) => (
          <ListItem key={text} sx={{
            padding:'0px 30px',
            '&:hover': {
              color: 'text.secondary',
            },
            '&.Mui-selected': {
              backgroundColor: 'yellow',
            },
          }}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{
        display: 'flex',
        justifyContent:'right',
        border:'1px solid red'
      }}>
        <IconButton sx={{
          color: 'gray',
          fontSize: '32px'
        }}>
          <FaFacebook />
        </IconButton>
        <IconButton sx={{
          color: 'gray',
          fontSize: '32px'
        }}>
          <AiFillInstagram />
        </IconButton>
        <IconButton sx={{
          color: 'gray',
          fontSize: '32px'
        }}>
          <FaXTwitter />
        </IconButton>
      </Box>
      <Box sx={{
        textAlign: 'right'
      }}>
        <SunMoonSwitch />
      </Box>


    </Box>
  );


  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* Here is the dashboard COntent */}
        <Container sx={{
          backgroundColor: '#061F30',
          borderRadius: '10px',
          padding: '16px'
        }}>
          {/* Heading */}
          <Typography variant='body2' sx={{
            fontSize: '20px'
          }}>
            Live Games
          </Typography>
          {/* Time and the cards */}
          <Box>
            {/* countdown */}

            <Box>
              <CountdownTimer initialSeconds={5} />
            </Box>
            {/* CARD */}

            <Grid container spacing={2} columns={16} justifyContent='center' sx={{
              margin: '20px auto'
            }}>
              <Grid xs={12} sm={12} lg={9} xl={10} sx={{
              }}>
                <Box sx={{
                  margin: '10px',
                  backgroundColor: '#4299E1',
                  padding: '12px',
                  borderRadius: '10px',
                  boxShadow:'#2778bb85 10px 3px, #226ba785 18px 6px, #195e971f 26px 8px',
                }}>
                  {/* Heading */}
                  <Typography sx={{
                    fontSize: '18px',
                    padding:'10px 10px'
                  }}>
                    This game has 3 sessions
                  </Typography>
                  {/* LIst Item */}
                  <List sx={{
                    padding:'12px 10px',
                    marginBottom:'35px'
                  }}>
                    <ListItem sx={{
                       width:'80%',
                       border:'1px solid #4299E1',
                       fontSize:'18px',
                      '&:hover': {
                        color: 'text.secondary',
                        border:'1px solid yellow',
                        borderRadius:'10px',
                        background:'linear-gradient( #DFC80B4D, #FFED5A4D)'
                       
                      }
                    }}>
                      Crypto
                    </ListItem>
                    <ListItem sx={{
                       width:'80%',
                       border:'1px solid #4299E1',

                       fontSize:'18px',
                      '&:hover': {
                        color: 'text.secondary',
                        border:'1px solid yellow',
                        borderRadius:'10px',
                        background:'linear-gradient( #DFC80B4D, #FFED5A4D)'
                       
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'yellow',
                      },
                    }}>
                      Sports
                    </ListItem>
                    <ListItem sx={{
                       width:'80%',
                       border:'1px solid #4299E1',
                       fontSize:'18px',
                      '&:hover': {
                        color: 'text.secondary',
                        border:'1px solid yellow',
                        borderRadius:'10px',
                        background:'linear-gradient( #DFC80B4D, #FFED5A4D)'
                       
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'yellow',
                      },
                    }}>
                      Science
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} lg={7} xl={6} sx={{
                
                paddingLeft:'30px',
                paddingRight:'30'
              }}>
                {/* Text ONe */}
                <Typography variant='h6' sx={{
                  padding:'20px 10px',
                  fontSize:'24px',
                  lineHeight:'33px'
                }}>
                1 of 3 Session | 13min
                </Typography>
                {/* Text Two */}
                <Typography variant="body2" sx={{
                    fontSize:'20px',
                    lineHeight:'28px',
                    paddingLeft:'10px'
                }}>
                Pot Size
                </Typography>

                {/* Rate */}
                <Typography sx={{
                  textAlign:'center',
                  fontSize:'34px',
                  fontFamily:'Basement Grotesque',
                  lineHeight:'50px',
                  padding:'20px 0'
                }}>
                35,589USDT
                </Typography>
                {/* Button */}
                <Box sx={{
                  paddingLeft:'10px'
                }}>
                <MainButton title={'Take a Seat'} onButtonClick={function (param: string): void {
                  throw new Error('Function not implemented.');
                } } disabled={undefined} />
                </Box>
               
                {/* Ticket */}
                <Box sx={{
                  display:'flex',
                  margin:'20px 10px'
                }}>
                  {/* IMage */}
                  <Box sx={{
                    color:'#FF351A',
                    paddingTop:'4px'
                  }}>
                  <IoTicketOutline />

                  </Box>
                  
                  <Typography sx={{
                    textDecoration:'underline'
                  }}>
                  01 Tickets Required to attend session
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
          {/* Upcoming Games   */}
          <UpComingGames />
      </Box>
    </Box>
  );
}
