import React from 'react'
import LeftBar from '../../Components/LeftBar/leftBar'
import TopBar from '../../Components/TopBar/topBar'
import { Outlet } from 'react-router'
import './mainLayout.css'

const mainLayout = () => {
  return (
    <div className='app'>
    <LeftBar />
    <div className='content'>
      <TopBar />
      <Outlet />
    </div>
  </div>
  )
}

export default mainLayout