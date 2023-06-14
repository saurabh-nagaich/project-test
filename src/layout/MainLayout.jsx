import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

function MainLayout() {
  return (
    <div className='MainLayout'>
        <Navbar />
        <div className="Content">
          <Outlet />
        </div>
    </div>
  )
}

export default MainLayout