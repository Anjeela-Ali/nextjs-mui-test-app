
'use client'

import { Box } from "@mui/material";
import Footer from "../(components)/Footer";
import Automated from "./ui/Automated";
import HeroSection from "./ui/HeroSection";
import RateSection from "./ui/Rate";
import dynamic from 'next/dynamic';
// import ThreeDWave from "./ui/ThreeDWave";

const ThreeDWave = dynamic(() => import('./ui/ThreeDWave'), { ssr: false });

const HomePage = () => {

  return (
    <>
      <HeroSection />
      <RateSection />
      <Automated />
      <Box sx={{  height:'60vh' }}>
        <ThreeDWave />
      </Box>

      <Footer />
    </>
  )
}

export default HomePage;
