import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FoodComponents from './components/FoodComponents'
import Filter from './components/Filter'
function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <FoodComponents/>
    <Filter/>
   </div>
  )
}

export default App