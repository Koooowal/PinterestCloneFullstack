import React from 'react'
import './leftBar.css'
import Image from '../Image/image'
import {Link} from 'react-router'
function leftBar() {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <Link to='/' className='menuIcon'>
          <Image path="/general/logo.png" alt="" className="logo"/>
        </Link>
        <Link to='/' className='menuIcon'>
          <Image path='/general/home.svg' alt='home' />
        </Link>
        <Link to='/create' className='menuIcon'>
          <Image path='/general/create.svg' alt='create' />
        </Link>
        <Link to='/' className='menuIcon'>
          <Image path='/general/updates.svg' alt='updates' />
        </Link>
        <Link to='/' className='menuIcon'>
          <Image path='/general/messages.svg' alt='messages' />
        </Link>
      </div>
      <Link to='/' className='menuIcon'>
          <Image path='/general/settings.svg' alt='settings' />
        </Link>
    </div>
  )
}

export default leftBar