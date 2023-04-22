import React, { useState } from 'react'
import { AiFillHeart, AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {BsFillCartCheckFill, BsSaveFill} from 'react-icons/bs'
import {CiDeliveryTruck} from 'react-icons/ci'
import {IoIosHelpCircle, IoMdWallet} from 'react-icons/io'
import {FaTruckMoving, FaUserAlt} from 'react-icons/fa'
function Navbar() {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] flex justify-between mx-auto p-4'>
      {/* left side */}
      <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)}>
          <AiOutlineMenu size={25}  className='cursor-pointer'/>
        </div>
        <div className='text-slate-900  text-3xl cursor-pointer '>
            DhaDhan <span className='font-bold text-orange-500'>Food</span>
        </div>
      </div>

      {/* Center */}
      <div className='flex items-center bg-gray-200 px-4 py-2 rounded-full w-[500px] space-x-2 md:px-2 md:py-0  sm:w-[100px] lg:w-[500px]' >
     <BiSearch size={20} />
     <input type="text" className='w-[500px] text-md bg-transparent focus:outline-none' placeholder='Search Food' />
        
  
        
      </div>

      {/* right */}
      <div className='flex items-center  bg-orange-500 rounded-lg px-2  text-white'>
        <div>
            <BsFillCartCheckFill size={25}/>
        </div>
        <div className='text-xl font-semibold'>Cart</div>
      </div>

      {/* sidbar */}

   <div>
    {nav ?    <div className='w-full  h-screen bg-black/80 fixed left-0 top-0 z-10'></div> :''}
    {/* overly */}
 

    <div className={nav ? 'top-0 left-0 w-[300px] h-screen z-10 duration-1000 bg-white fixed ' :'top-0 left-[-100] w-[300px] h-screen bg-white fixed duration-1000'}>
    <AiOutlineClose size={30} onClick={()=>setNav(!nav)} className='top-4 absolute right-4 cursor-pointer' />
    <h2 className='p-4  text-3xl border-b-8 border-orange-950 mx-6 '>
    DhaDhan <span className='font-bold text-orange-500 '>Food</span>
    </h2>
    <nav>
      <ul className='p-4 flex flex-col text-gray-800 '>
      <li className='flex text-xl items-center py-4 px-5 hover:bg-gray-100 hover:px-5 rounded-md'><FaTruckMoving className='mr-3 ' size={30} /> Order</li>
      <li className='flex text-xl items-center px-5 py-4  hover:bg-gray-100 rounded-md hover:px-5'><AiFillHeart className='mr-3' size={30}/> favourite</li>
      <li className='flex text-xl items-center px-5 py-4  hover:bg-gray-100 rounded-md hover:px-5'><IoMdWallet className='mr-3' size={30}/> Wallet</li>
      <li className='flex text-xl items-center px-5 py-4  hover:bg-gray-100 rounded-md hover:px-5'><IoIosHelpCircle className='mr-3' size={30}/> Help</li>
      <li className='flex text-xl items-center px-5 py-4  hover:bg-gray-100 rounded-md hover:px-5'><AiFillTag className='mr-3' size={30}/> Promotions</li>
      <li className='flex text-xl items-center px-5 py-4  hover:bg-gray-100 rounded-md hover:px-5'><BsSaveFill className='mr-3' size={30}/> Best One</li>
      <li className='flex text-xl items-center px-5 py-4  hover:bg-gray-100 rounded-md hover:px-5'><FaUserAlt className='mr-3' size={30}/> Invite Friends</li>
       
      </ul>
    </nav>
    </div>
   </div>
    </div>
    
  )
}

export default Navbar