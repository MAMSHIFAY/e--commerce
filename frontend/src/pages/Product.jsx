import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId}=useParams();
  const{products,currency,addToCart} = useContext(ShopContext);
  const[productData,setProductData]=useState(false);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('');

  const fetchProductData=async()=>{
       
    products.map((item)=>{
       if(item._id==productId){
        setProductData(item)
       setImage(item.image[0])
        return null;
       }
    })
          
  }
  useEffect(()=>{
     fetchProductData()
  },[productId])

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* --------products images----- */}
       <div className='flex flex-col sm:flex-row gap-8 sm:gap-12'>
        <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
            </div>
         </div>
         {/* --------products information--------- */}
         <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon}alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {/* sizes */}
              {
                productData.sizes.map((item,index)=>(
     <button
  onClick={() => setSize(item)}
  key={index}
  className={`border py-2 px-4 bg-gray-100 hover:border-orange-500 transition ${item === size ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}
  `}
>
  {item}
</button>

                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Case On Delivery Available On This Product.</p>
            <p>Easy Return And Exchange Policy Within 7 Days.</p>
          </div>
         </div>
      </div>
       {/* -------description and reveiw section */}
       <div className='mt-20'>
         <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
         </div>
         <div className='flex flex-col gap-4 border px-6 py-4 text-sm text-gray-500'>
          <p>Step into effortless elegance with our beautifully designed dresses.
Each piece is crafted to flatter your silhouette and boost your confidence.
Perfect for every occasion — from brunch dates to evening events</p>
          <p>Discover dresses that blend comfort, style, and attitude.
From bold prints to minimal chic, we’ve got your fashion moments covered.
Wear it, flaunt it, and feel fabulous every day.</p>
         </div>
       </div>
            {/* ------------------disply realted-------- */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ):<div className='opacity-0'></div>
}

export default Product