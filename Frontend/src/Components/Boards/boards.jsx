import React from 'react'
import './boards.css'
import Image from '../Image/Image'
import { useQuery } from '@tanstack/react-query'
import ApiRequest from '../../Utility/apiRequest'
import {format} from 'timeago.js'
import { Link } from 'react-router'

function Boards({userId}) {

  const {isPending, data, error} = useQuery({
      queryKey:['boards',userId],
      queryFn: () => ApiRequest.get(`/boards/${userId}`).then((res) => res.data),
    });
  
    if (isPending) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  
    if (!data) return "User not found!";


    return (
      <div className="collections">
        {/* COLLECTION */}
        {data?.map((board) => (
          <Link
            to={`/search?boardId=${board._id}`}
            className="collection"
            key={board._id}
          >
            <Image path={board.firstPin.media} alt="" />
            <div className="collectionInfo">
              <h1>{board.title}</h1>
              <span>
                {board.pinCount} Pins · {format(board.createdAt)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    );
}

export default Boards