import React, { useState } from 'react'
import data from './data'

function Filter() {
  const [food, setfood] = useState(data);

  const FilterType = (catagory) =>  {
    setfood(
      data.filter((item)=>(
        item.catagory ===catagory
      ))
    )
  }
  return (
    <div className='max-w-[1640px] mx-auto p-4 pt-12'>
          <div className=' max-w-[1640px] mx-auto p-4 pt-12'>
        <h1 className='text-center text-3xl font-serif font-bold '>Top Related  <span className='text-orange-500'>Foods.</span></h1>
        <div className='flex space-x-5 text-center justify-center py-8'>
          <button onClick={()=>setfood(data)} className=' border-orange-500 border-2 px-4 py-1 rounded-sm'>All</button>
          <button onClick={()=>FilterType('Hamburger')} className=' border-orange-500 border-2 px-4 py-1 rounded-sm'>Hamburger</button>
          <button onClick={()=> FilterType('pizza')} className=' border-orange-500 border-2 px-4 py-1 rounded-sm'>Pizza</button>
          <button onClick={()=> FilterType('drinks')} className=' border-orange-500 border-2 px-4 py-1 rounded-sm'>Drinks</button>
        </div>
    </div>
    {/* Display data */}
    <div className='grid grid-cols-3 w-full h-[500px] p-4 gap-3 mb-28'>
      {
        food.map(xog =>(
          <div className='shadow-2xl'>
            <img src={xog.img} className='w-full h-[500px] object-cover rounded-md' alt="" />
           <div className='flex w-full justify-between text-2xl py-2 px-4' >
           <h2 className='font-bold'>{xog.name}</h2>
            <span className='font-serif text-orange-500 font-black'>${xog.price}</span>
           </div>
          </div>
        ))
      }
    </div>
        </div>
  )
}

export default Filter