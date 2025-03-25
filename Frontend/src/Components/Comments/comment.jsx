import Image from "../Image/Image";
import {format} from "timeago.js" 
import './comments.css'

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Image 
  src={comment.user.img ? comment.user.img : undefined} 
  path={!comment.user.img ? "/general/noAvatar.png" : undefined} 
  alt="" 
/>
      <div className="commentContent">
        <span className="commentUsername">{comment.user.displayName}</span>
        <p className="commentText">
          {comment.description}
        </p>
        <span className="commentTime">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;