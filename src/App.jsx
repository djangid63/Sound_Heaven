import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import { UpdateFollower } from 'react-mouse-follower'
import Banner from './Components/Banner/Banner';
import BannerText from './Components/Banner/BannerText';
import Footer from './Components/Footer/Footer';
import ProductCard from './Components/Product/ProductCard';

function App() {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
        <Navbar />
        <Hero />
      </UpdateFollower>

      <UpdateFollower mouseOptions={{
        backgroundColor: 'black',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
        <ProductCard />
        <Services />
        <Banner />
        <BannerText />
      </UpdateFollower>
      <Footer />
    </main>
  )
}

export default App
