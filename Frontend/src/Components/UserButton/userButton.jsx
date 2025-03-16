import React from 'react'
import './userButton.css'
import { useState } from 'react';
import Image from '../Image/Image'

function userButton() {
  const currentUser = true;
  const [open, setOpen] = useState(false);

  return currentUser ? (
    <div className='userButton'>
      <Image path='/general/noAvatar.png' alt=''/>
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image path='/general/arrow.svg' alt='' className='arrow'/>
      </div>
      {open && (<div className='user-options'>
        <div className='user-option'>Profile</div>
        <div className='user-option'>Settings</div>
        <div className='user-option'>Logout</div>
      </div>
    )}
    </div>
  ) : (
    <a href='/' className='login-link'>
      Login/Sign Up
    </a>
  )

}

export default userButton