import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Tittle from './Tittle'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const{products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);
     
    useEffect(()=>{
setLatestProducts(products.slice(0,10))
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Tittle text1={'LATEST'} text2={'collection'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Swift Mart brings you the finest products at unbeatable prices. Quality, convenience, and style – all in one place!</p>
        </div>
            {/* rendring pruducts */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {latestProducts.map(item => (
    <ProductItem
        key={item._id}        // unique key
        id={item._id}          // correct id
        image={item.image[0]}  // first image from array
        name={item.name}
        price={item.price}
    />
))}

            </div>
    </div>
  )
}

export default LatestCollection