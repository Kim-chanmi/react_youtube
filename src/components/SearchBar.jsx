import React from 'react'
import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch'

const SearchBar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <AiOutlineSearch />
      </label>

      <input
        type="text"
        id="searchInput"
        className="input__searc"
        placeholder="경제 유투버를 검색하세요!"
        title="검색"
      />
    </div>
  )
}

export default SearchBar
