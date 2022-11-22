import React from 'react'
import { SearchBar } from '.'
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube'
import { Link } from 'react-router-dom'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="icon" />
          Eco Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
