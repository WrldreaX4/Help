import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import MissingPage from './pages/missingPage'
import AdoptionPage from './pages/adoptionPage'
import ProfilePage from './pages/profilePage'
import ServicesPage from './pages/servicesPage'
import LostPage from './pages/lostPage'

const App = () => {
  console.log('App Component Loaded!')

  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/adopt' element={<AdoptionPage />} />
      <Route path='/missing' element={<MissingPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/lostPage' element={<LostPage />} />




    </Routes>
  )
}

export default App
