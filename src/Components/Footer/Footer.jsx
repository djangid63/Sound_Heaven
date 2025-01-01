import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Cards from '../../assets/credit-cards.webp'

const footer = () => {
  return (
    <>
      <footer className='bg-primary pt-12 pb-8 text-white'>
        <div className='container '>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20'>
            {/* Company details section */}
            <div className='space-y-6 '>
              <h1 className='text-3xl font-bold uppercase'>Sound Heaven</h1>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores</p>
              <div className=''>
                <p className='flex items-center gap-2'>
                  <FaPhone />
                  <span>1234567890</span>
                </p>
                <p className='flex items-center gap-2 mt-2'>
                  {" "}
                  <FaMapMarkerAlt /> Noida, Uttar Pradesh
                </p>
              </div>
            </div>
            {/* footer links section */}
            <div className='space-y-6 '>
              <h1 className='text-3xl font-bold'>Quick Links</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <div>
                  <ul className='space-y-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className='space-y-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Social section */}
            <div className='space-y-6'>
              <h1 className='text-3xl font-bold'>Follow Us</h1>
              <div className='flex items-center gap-4'>
                <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                <FaTelegram className='text-3xl hover:scale-105 duration-300' />
                <FaGoogle className='text-3xl hover:scale-105 duration-300' />
              </div>
              <div className='space-y-2'>
                <p>Payment Methods</p>
                <img src={Cards} alt='cards' className='w-[80%]' />
              </div>
            </div>
          </div>
          {/* copyright section */}
        </div>
        {/* Sperator line */}
        <div className='w-[80%] h-0.5 mx-40 bg-slate-300 my-5  '></div>
        <div className='text-center mt-8'>
          <p>© 2024. All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default footer