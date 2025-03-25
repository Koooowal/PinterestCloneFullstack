import React from 'react'
import './gallery.css'
import GalleryItem from '../GalleryItem/galleryItem';
import {useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchPins = async ({pageParam, search,userId,boardId}) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${
      search || ""
    }&userId=${userId || ""}&boardId=${boardId || ""}`
  );
  return res.data;
}

function Gallery({search,userId, boardId}) {
  const {data, fetchNextPage, hasNextPage, status} = useInfiniteQuery({
    queryKey: ["pins", search, userId, boardId],
    queryFn:({pageParam=0})=>fetchPins({pageParam,search,userId,boardId}),
    initialPageParam:0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if(status==='error') return "An error has occurred: ";
  if(status==='pending') return "Loading...";


  const allPins = data?.pages.flatMap((page) => page.pins) || [];
  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins</h4>}
      endMessage={<h3>All Posts Loaded!</h3>}
    >
      <div className="gallery">
        {allPins?.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery