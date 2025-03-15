import React from 'react'
import './leftBar.css'

function leftBar() {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <a href='/' className='menuIcon'>
          <img src='/general/logo.png' alt='logo' className='logo'/>
        </a>
        <a href='/' className='menuIcon'>
          <img src='/general/home.svg' alt='home' />
        </a>
        <a href='/' className='menuIcon'>
          <img src='/general/create.svg' alt='create' />
        </a>
        <a href='/' className='menuIcon'>
          <img src='/general/updates.svg' alt='updates' />
        </a>
        <a href='/' className='menuIcon'>
          <img src='/general/messages.svg' alt='messages' />
        </a>
      </div>
      <a href='/' className='menuIcon'>
          <img src='/general/settings.svg' alt='settings' />
        </a>
    </div>
  )
}

export default leftBar