import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2x text-center pt-8 border-t'>
        <Tittle text1={'ABOUT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-800'>
          <p>
            Welcome to Swift Mart, your one-stop destination for quality
            products at unbeatable prices. We believe shopping should be simple,
            fast, and enjoyable. Our team works hard to bring you the best deals
            and a seamless shopping experience — whether you're browsing from
            home or on the go.
          </p>
          <p>
            At Swift Mart, we’re passionate about making online shopping smarter
            and easier. From trendy fashion to everyday essentials, we’ve got
            everything you need in one place. We value quality, trust, and
            customer satisfaction above all else — because your happiness is our
            success!
          </p>

          <b className='text-gray-800'>OUR MISSION</b>
          <p>
            Our mission is to provide customers with high-quality products at
            fair prices while delivering a seamless and enjoyable shopping
            experience. We aim to make Swift Mart the most trusted name in
            online retail.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Tittle text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            At Swift Mart, quality is our top priority. Every product we offer
            goes through a careful selection process to ensure it meets our high
            standards of reliability, durability, and performance. We partner
            only with trusted brands and verified suppliers to guarantee that
            our customers always receive the best.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            At Swift Mart, we make shopping effortless. Our user-friendly
            platform, secure payment options, and fast delivery services are all
            designed to give you a smooth and hassle-free shopping experience
            from start to finish.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            At Swift Mart, we pride ourselves on delivering exceptional customer
            service. Our support team is always ready to assist you — from
            product inquiries to after-sales support — ensuring a smooth and
            satisfying shopping experience every time.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
