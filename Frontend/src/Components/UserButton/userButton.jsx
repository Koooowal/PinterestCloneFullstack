import React from 'react'
import './userButton.css'

function userButton() {
  const currentUser = true;

  return currentUser ? (
    <div className='userButton'>
      <img src='/general/noAvatar.png' alt=''/>
      <img src='/general/arrow.svg' alt='' className='arrow'/>
    </div>
  ) : (
    <a href='/' className='login-link'>
      Login/Sign/Up
    </a>
  )

}

export default userButton