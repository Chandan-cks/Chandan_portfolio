// pages/index.tsx

import Navbar from '@/components/Navbar';
import MainPage from '@/components/MainPage';

export default function Home() {
  return (
    <>
      <Navbar />
      <MainPage /> {/* This will always show the main page */}
    </>
  );
}
