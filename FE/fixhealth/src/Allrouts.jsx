import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import BookingForm from './Components/BookingForm'

const Allrouts = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/booking' element={<BookingForm/>}/>
      
    </Routes>
  )
}

export default Allrouts
