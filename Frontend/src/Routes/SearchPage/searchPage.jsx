import React from 'react'
import './searchPage.css'
import Gallery from '../../Components/Gallery/Gallery'
import { useSearchParams } from 'react-router'

function searchPage() {
  let [searchParams]=useSearchParams();
  const search = searchParams.get('search');
  const boardId = searchParams.get('boardId');
  return (
    <Gallery search={search} boardId={boardId}/>
  )
}

export default searchPage