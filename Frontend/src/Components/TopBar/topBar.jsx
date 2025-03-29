import React from 'react'
import './topBar.css'
import { useNavigate } from 'react-router'
import UserButton from '../UserButton/userButton'
import Image from '../Image/image'

function topBar() {
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  }

  return (
    <div className='topBar'>
      <form onSubmit={handleSubmit} className='search'>
        <Image path='/general/search.svg' alt=''/>
        <input type='text' placeholder='Search for anything'/>
      </form>
        <UserButton/>
    </div>
  )
}

export default topBar