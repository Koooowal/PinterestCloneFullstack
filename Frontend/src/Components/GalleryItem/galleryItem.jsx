import React from 'react'
import './galleryItem.css'
import { Link } from 'react-router'

function galleryItem({item}) {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
      <img src={item.media} alt={item.title} />
      <Link to={`/pin/${item.id}`} className='overlay'/>
      <button className='saveButton'>Save</button>
      <div className='overlayIcons'>
        <button>
          <img src='/general/share.svg' alt='Share'/>
        </button>
        <button>
        <img src='/general/more.svg' alt='Share'/>
        </button>
      </div>
    </div>
  )
}

export default galleryItem