import React from 'react';
import Icon1 from "../../assets/icons/obj1.png"
import Icon2 from "../../assets/icons/obj2.png"
import Icon3 from "../../assets/icons/obj3.png"
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'motion/react';

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
    // exit: {
    //   opacity: 0,
    //   y: 50,
    //   scale: 0.5,
    //   transition: {
    //     duration: 0.2,
    //     ease: "easeInOut",
    //   },
    // },
  };
}

const ServicesData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    description: "We provide top-notch security services to ensure your data and assets are always protected.",
    delay: 1.5,
  },
  {
    id: 2,
    title: "Guarantee",
    icon: Icon2,
    description: "Our services come with a satisfaction guarantee, ensuring you get the best.",
    delay: 1,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    description: "We offer competitive pricing without compromising on quality, making our services affordable for everyone.",
    delay: 0.5,
  },
]

const Services = () => {
  return (
    <>
      <section className='bg-gray-100 font-poppins py-8'>
        <div className='container py-4'>
          <h1 className='text-3xl font-bold text-center pb-10'>
            Services
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' >
            {ServicesData.map((data) => (
              <UpdateFollower key={data.id}
                mouseOptions={{
                  backgroundColor: 'white',
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  mixBlendMode: "darken",
                  rotate: 720,
                  backgroundElement: (
                    <motion.div variants={fadeUp(data.delay)}>
                      <img src={data.icon} alt=''></img>
                    </motion.div>
                  ),
                }}
              >
                <motion.div variants={fadeUp(data.delay)} initial="hidden" whileInView="show" className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white'>
                  <img className='w-[100px] mb-4' src={data.icon} alt='' />
                  <div className=' text-center space-y-2'>
                    <h1 className='text-2xl font-bold'>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default Services