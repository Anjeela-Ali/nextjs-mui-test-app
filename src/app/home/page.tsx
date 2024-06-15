
'use client'

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
      <RateSection  />
      <Automated />
      <ThreeDWave />
      <Footer />
    </>
  )
}

export default HomePage;
