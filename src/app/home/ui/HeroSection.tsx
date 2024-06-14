import React from 'react'
import { Typography, CssBaseline, Container, Box, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTerms } from '@/context/TermsContext';
import Image from 'next/image';
import ProfileCard from '@/app/(components)/UserProfile';
import MainButton from '@/app/(components)/MainButton';
import MediaCard from './Cards';



const HeroSection = () => {
    const router = useRouter();
    const { termsAccepted } = useTerms();
    const handleButtonClick = () => {
        if (termsAccepted) {
            router.push('/dashboard')
        } else {
            router.push('/terms')
        }

    }

    return (
        <div>
            <CssBaseline />
            <Box sx={{
                padding: 4,
                textAlign: 'center',
                backgroundImage: 'url(/landing-page-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {/* Heroo section */}
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    {termsAccepted && <ProfileCard name="John Doe" />}
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
                        fontSize: '48px',
                        lineHeight: '2'
                    }}>
                        Answer questions and win rewards
                    </Typography>
                    <Typography variant='body2' sx={{
                        fontSize: '18px',
                        fontWeight: '400',
                        lightHeight: '28px',
                        padding: '10px 10px'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Box sx={{
                        margin: '15px auto'
                    }}>
                        <MainButton title={termsAccepted ? 'Dashboard' : 'Continue'} onButtonClick={handleButtonClick} disabled />
                    </Box>

                    {/* Cards */}
                    <Box sx={{ padding: 4, minHeight: '100vh' }}>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} sm={6} md={4}>
                                <MediaCard
                                    title="Play & Get a chance to take the pot"
                                    description="Lorem Ipsumis simply dummy text of the printing and typesetting industry.ly dummy text of the."
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
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
            </Box>
        </div>
    )
}

export default HeroSection
