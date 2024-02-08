import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import BookingForm from './Components/BookingForm'
import Thank from './Components/Thank'

const Allrouts = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/booking' element={<BookingForm/>}/>
      <Route path='/thanks' element={<Thank/>}/>
      
    </Routes>
  )
}

export default Allrouts
