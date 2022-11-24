import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchAPI } from '../utils/fetchAPI'
import { Videos } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <main id="main">
      <div className="searchCont">
        <h2 className="result">
          <em>{searchTerm}</em> 검색결과입니다.
        </h2>
        <Videos videos={videos} />
      </div>
    </main>
  )
}
export default SearchConts
