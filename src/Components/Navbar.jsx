import React from 'react'
import { MdMenu } from 'react-icons/md'
import { SlEarphones } from 'react-icons/sl'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from "motion/react"

const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    url: '#',
  },
  {
    id: 2,
    title: 'Categories',
    url: '#',
  },
  {
    id: 3,
    title: 'Services',
    url: '#',
  },
  {
    id: 4,
    title: 'Contact',
    url: '#',
  },
  {
    id: 5,
    title: 'About',
    url: '#',
  }
]

const Navbar = () => {
  return (
    <>
      <div className=' bg-brandDark text-white py-6 font-varela'>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='container flex justify-between items-center' >

          {/* ____ logo section ____ */}

          <div>
            <a href='#' className='text-xl font-bold uppercase'>
              sound /{" "}
              <span className='font-extralight text-white'>Heaven</span>
            </a>
          </div>

          {/* ____ Menu section ____ */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <UpdateFollower mouseOptions={{ backgroundColor: 'white', zIndex: 999, followSpeed: 1.5, scale: 5, mixBlendMode: "difference" }}>
                      <a href={item.url} className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>

                    </UpdateFollower>
                  </li>
                )
              })}
              <UpdateFollower mouseOptions={{
                backgroundColor: 'white',
                zIndex: 999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }} >

                <button className=' text-xl ps-14'>
                  <SlEarphones></SlEarphones>
                </button>

              </UpdateFollower>
            </ul>
          </div>

          {/* ____ Mobile Humbergur section ____ */}
          <div className='md:hidden'>
            <MdMenu className='text-4xl' />
          </div>
        </motion.nav>
      </div>
    </>
  )
}

export default Navbar
