import React from 'react'

const Placeorder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* left sight */}
      <div className='flex flex-col gap-w w-full sm:max-w-[480]'>
        <div className='text-xm sm:text my-5'>
          <Tittle text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'></div>
      </div>
    </div>
  )
}

export default Placeorder