import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos } from '.'

// import dummy from '../utils/youtube.json';
// const [videos, setVideos] = useState(dummy.items);

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('어피티')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
      // console.log(data.items)
    )
  }, [selectCategory])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 유튜버
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts
