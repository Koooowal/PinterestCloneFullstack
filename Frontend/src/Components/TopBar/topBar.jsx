import React from 'react'
import './topBar.css'
import UserButton from '../UserButton/userButton'

function topBar() {
  return (
    <div className='topBar'>
      <div className='searchBar'>
        <img src='/general/search.svg' alt='search'/>
        <input type='text' placeholder='Search for anything'/>
      </div>
        <UserButton/>
    </div>
  )
}

export default topBar