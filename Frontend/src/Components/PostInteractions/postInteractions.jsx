import React from 'react'
import './postInteractions.css'
import Image from '../Image/Image'

function postInteractions() {
  return (
    <div className='postInteractions'>
      <div className="interactionIcons">
        <Image path="/general/react.svg" alt="react" />
        <Image path="/general/share.svg" alt="share" />
        <Image path="/general/more.svg" alt="more" />
      </div>
    </div>
  )
}

export default postInteractions