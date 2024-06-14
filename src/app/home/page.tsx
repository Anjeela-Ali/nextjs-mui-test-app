
'use client'
import React from 'react'
import { Typography, CssBaseline, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import MainButton from '../components/MainButton';
import ProfileCard from '../components/UserProfile';
import { useTerms } from '@/context/TermsContext';

const HomePage = () => {
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
    <>
      <CssBaseline />
      <Container>
        {termsAccepted && <ProfileCard name="John Doe" />}
        <Typography variant="h4" sx={{
          color: 'text.secondary',
          fontFamily: 'Basement Grotesque'
        }}>
          Hello, MUI Theme!
        </Typography>
        <MainButton title={termsAccepted ? 'Dashboard' : 'Continue'} onButtonClick={handleButtonClick} disabled />
      </Container>
    </>
  )
}

export default HomePage;
