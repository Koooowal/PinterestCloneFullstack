import React from 'react'
import './comments.css'
import Image from '../Image/Image'
import EmojiPicker from 'emoji-picker-react'

function comments() {
  const [open,setOpen] = React.useState(false)
  return (
    <div className='comments'>
      <div className="commentList">
        <span className="commentCount">2 comments</span>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc nec nisl aliquam tincidunt. Nulla facilisi. Nullam nec nunc nec nisl aliquam tincidunt. Nulla facilisi.
            <span className='commentTime'>2 hours ago</span>
            </p>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment"/>
        <div className="emoji">
          <div onClick={()=>setOpen(prev=>!prev)}>😊</div>
          {open && <div className="emojiPicker">
            <EmojiPicker/>
          </div>}
        </div>
      </form>
    </div>
  )
}

export default comments