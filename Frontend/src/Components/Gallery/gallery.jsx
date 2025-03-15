import React from 'react'
import './gallery.css'
import GalleryItem from '../GalleryItem/galleryItem';

//TEMPORARY DATA
const items=[

];

function gallery() {
  return (
    <div className='gallery'>
      {items.map((item)=>{
        return(
          <GalleryItem key={item.id} item={item}/>
        )
      })}
    </div>
  )
}

export default gallery