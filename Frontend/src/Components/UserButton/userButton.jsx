import React from 'react'
import './userButton.css'
import { useState } from 'react';
function userButton() {
  const currentUser = true;
  const [open, setOpen] = useState(false);

  return currentUser ? (
    <div className='userButton'>
      <img src='/general/noAvatar.png' alt=''/>
      <img src='/general/arrow.svg' alt='' className='arrow' onClick={()=>setOpen((prev)=>!prev)}/>
      {open && (<div className='user-options'>
        <div className='user-option'>Profile</div>
        <div className='user-option'>Settings</div>
        <div className='user-option'>Logout</div>
      </div>
    )}
    </div>
  ) : (
    <a href='/' className='login-link'>
      Login/Sign/Up
    </a>
  )

}

export default userButton