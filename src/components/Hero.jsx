import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto rounded-xl p-6 '>
    <div className='relative max-h-[500px] rounded-xl'>
    <div className='absolute w-full h-full max-h-[500px] bg-black/50 rounded-xl flex flex-col justify-center p-7 '>
            <h2 className='text-4xl font-serif font-bold capitalize space-x-2 text-white '>DhaDhan Fast <span className='text-orange-500 '>Food</span></h2>
            <h4 className='text-4xl  font-serif font-bold capitalize space-x-2 text-white '>Home of <span className='text-orange-500'>Sweets</span> and Cakes</h4>
        </div>
        <img src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full max-h-[500px] object-cover rounded-xl' alt="" />
    </div>
       
    </div>
  )
}

export default Hero