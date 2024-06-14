
'use client'
import React from 'react'
import { Typography, CssBaseline, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import MainButton from '../components/MainButton';
import ProfileCard from '../components/UserProfile';

const HomePage = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/terms')
  }

  return (
    <>
       <CssBaseline />
      <Container>
        <ProfileCard name='John'/>
        <Typography variant="h4" sx={{
          color: 'text.secondary',
        }}>
          Hello, MUI Theme!
        </Typography>
        <MainButton title="Connect" onButtonClick={handleButtonClick} disabled/>
      </Container>
    </>
  )
}

export default HomePage
