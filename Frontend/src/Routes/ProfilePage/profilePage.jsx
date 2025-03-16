import React from 'react'
import './profilePage.css'
import Image from '../../Components/Image/Image'
import Gallery from '../../Components/Gallery/Gallery'
import Collections from '../../Components/Collections/collections'

function profilePage() {
  const [type,setType] = React.useState('saved')

  return (
    <div className='profilePage'>
      <Image path='/general/noAvatar.png' alt=''/>
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@johndoe</span>
      <div className="followCounts">10 followers</div>
      <div className='profileInteractions'>
        <Image path='/general/share.svg' alt=''/>
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path='/general/more.svg' alt=''/>
      </div>
      <div className="profileOptions">
        <span onClick={()=>setType('created')} className={type==='created' ? 'active' : ''}>Created</span>
        <span onClick={()=>setType('saved')} className={type==='saved' ? 'active' : ''}>Saved</span>
      </div>
      {type==='created' ? <Gallery/> : <Collections/>}
    </div>
  )
}

export default profilePage