import React, { useState } from 'react'
import { Typography, CssBaseline, Container, Box, Grid, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTerms } from '@/context/TermsContext';
import Image from 'next/image';
import ProfileCard from '@/app/(components)/UserProfile';
import MainButton from '@/app/(components)/MainButton';
import MediaCard from './Cards';
import TermsAndConditions from '@/app/terms/page';



const HeroSection = () => {
    const router = useRouter();
    const { termsAccepted } = useTerms();
    const [open, setOpen] = useState(false);
    const handleButtonClick = () => {
        if (termsAccepted) {
            router.push('/dashboard')
        } else {
            setOpen(true)
        }

    }

    const handleClose = () => setOpen(false);

    return (
        <div>
            <CssBaseline />
            <Box sx={{
                padding: 7,
                textAlign: 'center',
                backgroundImage: 'url(/landing-page-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                height: '1035px'
            }}>
                {/* Heroo section */}
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 8,
                    marginTop: '130px'

                }}>
                    {termsAccepted && <ProfileCard name="John_Doe" address={'0x1cCD...4754'} />}
                    {/* Logo */}
                    <Image
                        src="/logo.png"
                        alt="Picture of the author"
                        width={170}
                        height={101}
                        quality={100}
                    />
                    <Typography variant="h4" sx={{
                        color: 'text.primary',
                        fontFamily: 'Basement Grotesque',
                        fontWeight: '700',
                        fontSize: '43px',
                        lineHeight: '67px'
                    }}>
                        Answer questions and win rewards
                    </Typography>
                    <Typography variant='body2' sx={{
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '28px',
                        padding: '10px 10px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Box sx={{
                        margin: '33px auto'
                    }}>
                        <MainButton title={termsAccepted ? 'Dashboard' : 'Continue'} onButtonClick={handleButtonClick} disabled />
                    </Box>

                    {/* Cards */}
                    <Box sx={{ padding: '78px 10px', marginTop: '50px' }}>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} sm={6} md={4}>
                                <MediaCard
                                    title="Play & Get a chance to take the pot"
                                    description="Lorem Ipsumis simply dummy text of the printing and typesetting industry.ly dumm"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{
                                transform: 'translateY(-60px)'
                            }}>
                                <MediaCard
                                    title="Register & Connect Wallet"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <MediaCard
                                    title="Buy Game Tickets to Enter a session"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Modal
                
                open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  
                    >
                    <TermsAndConditions />
                </Modal>
            </Box>
        </div>
    )
}

export default HeroSection
