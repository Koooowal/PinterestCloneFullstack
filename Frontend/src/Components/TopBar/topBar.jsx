import React from 'react'
import './topBar.css'
import UserButton from '../UserButton/userButton'
import Image from '../Image/Image'

function topBar() {
  return (
    <div className='topBar'>
      <div className='searchBar'>
        <Image path='/general/search.svg' alt='search'/>
        <input type='text' placeholder='Search for anything'/>
      </div>
        <UserButton/>
    </div>
  )
}

export default topBar