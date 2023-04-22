import React from 'react'

function FoodComponents() {
  return (
    <div className='max-w-[1640] mx-auto p-4 grid grid-cols-3 gap-5 '>
        <div className='w-full h-[300px] relative'>
          <div className='absolute p-3 text-white w-full bg-black/60 flex flex-col justify-center items-center h-full rounded-sm '>
          <h2 className='text-3xl font-bold  text-gray-200 font-serif justify'>Somali Food</h2>
            <p className='py-4 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum in repellendus accusantium similique corrupti consequuntur eos illum beatae exercitationem!</p>
            <button className='bg-orange-500 px-4 py-2 rounded-sm text-xl'>Order Now</button>
          </div>
          <div>
          
          </div>

          <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-[300px] rounded-sm object-cover' alt="" />
        </div>
        <div className='w-full h-[300px] relative'>
          <div className='absolute p-3 text-white w-full bg-black/60 flex flex-col justify-center items-center h-full rounded-sm '>
          <h2 className='text-3xl font-bold  text-gray-200 font-serif justify'>Cake</h2>
            <p className='py-4 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum in repellendus accusantium similique corrupti consequuntur eos illum beatae exercitationem!</p>
            <button className='bg-orange-500 px-4 py-2 rounded-sm text-xl'>Order Now</button>
          </div>
          <div>
          
          </div>

          <img src="https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-[300px] object-cover rounded-sm' alt="" />
        </div>
        <div className='w-full h-[300px] relative'>
          <div className='absolute p-3 text-white w-full bg-black/60 flex flex-col justify-center items-center h-full rounded-sm '>
          <h2 className='text-3xl font-bold  text-gray-200 font-serif justify'>Fast Food</h2>
            <p className='py-4 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum in repellendus accusantium similique corrupti consequuntur eos illum beatae exercitationem!</p>
            <button className='bg-orange-500 px-4 py-2 rounded-sm text-xl'>Order Now</button>
          </div>
          <div>
          
          </div>

          <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full h-[300px] rounded-sm object-cover' alt="" />
        </div>
    </div>
  )
}

export default FoodComponents