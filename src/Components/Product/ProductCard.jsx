import React from 'react'
import image1 from "../../assets/headphone.png"
import image2 from "../../assets/headphone2.png"
import image3 from "../../assets/headphone3.png"
import { fadeUp } from '../Services/Services'
import { motion } from 'motion/react'
import { delay } from 'motion'


const ProductData = [
  {
    title: "Ninja Wireless",
    price: "$10.00",
    image: image1,
    description: "This is a description for Product 1.",
    delay: 0.75,
  },
  {
    title: "Katana Wireless",
    price: "$20.00",
    image: image2,
    description: "This is a description for Product 2.",
    delay: 1,
  },
  {
    title: "Samurai Wireless",
    price: "$30.00",
    image: image3,
    description: "This is a description for Product 3.",
    delay: 1.5,
  }
]

const ProductCard = () => {
  return (
    <>
      <div className='container bg-gray-100 py-4'>
        <h1 className='text-3xl font-bold text-center p-10'>
          Our Product Catalog
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center '>
          {ProductData.map((card, index) => (
            <motion.div variants={fadeUp(ProductData.delay)} initial="hidden" whileInView="show" key={index} className='flex flex-col justify-center items-center p-5 bg-white shadow-lg max-w-[300px] mx-auto rounded-xl '>
              <div className=' flex flex-col justify-center items-center w-[100%] h-[100%]'>
                <img className='w-[100px] mb-4' src={card.image} alt={card.title} />
                <div className='text-center space-y-2'>
                  <h1 className='text-2xl font-bold'>{card.title}</h1>
                  <p>{card.description}</p>
                  <h2 className='text-xl font-bold'>{card.price}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductCard