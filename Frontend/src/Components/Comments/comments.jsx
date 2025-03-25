import React from 'react'
import './comments.css'
import { useQuery } from '@tanstack/react-query'
import ApiRequest from '../../Utility/apiRequest'
import Comment from './comment'
import CommentForm from './commentForm'

function comments({id}) {
  const [open,setOpen] = React.useState(false)

  const {isPending, data, error} = useQuery({
    queryKey:['comments',id],
    queryFn: () => ApiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "User not found!";



  return (
    <div className='comments'>
      <div className="commentList">
        <span className="commentCount">{data.length===0 ? "No comments" : data.length + " comments"} </span>
        {data.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <CommentForm id={id}/>
    </div>
  )
}

export default comments