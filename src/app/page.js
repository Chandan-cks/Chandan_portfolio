import * as React from 'react';
import Navbar from '@/components/Navbar';
import MainPage from '@/components/MainPage';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';


export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage />
      <About />
      <Resume />
      <Portfolio />
      <ContactMe />
    </>
  );
}
