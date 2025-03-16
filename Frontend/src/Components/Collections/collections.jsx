import React from 'react'
import './collections.css'
import Image from '../Image/Image'

function collections() {
  return (
    <div className='collections'>
      <div className="collection">
        <Image path='/pins/pin1.jpeg' alt=''/>
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>10 Pins</span>
        </div>
      </div>
    </div>
  )
}

export default collections