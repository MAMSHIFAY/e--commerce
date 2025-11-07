import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Tittle from '../components/Tittle';

const Orders = () => {

  const{products,currency}=useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Tittle text1={'MY '} text2={'ORDERS'}/>
      </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm '>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>Date <span className='text-gary-400'>6,Nov,2025</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-3'>
                <p className='min-w-2 h-2 rounded-full bg-green-300'></p>
                <p className='text-sm text-base'>Ready To Ship</p>
              </div>
               <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>
          ))


        }
      </div>
    </div>
  )
}

export default Orders