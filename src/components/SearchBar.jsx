import React from 'react'
import './SearchBar.css'

const SearchBar = ({ search, setSearch }) => {

  return (
    <div className='search-container'>
      <input
        className='search-input'
        type="text"
        placeholder='Search Products...'
        value={search}
        onChange={(e) => setSearch( e.target.value )}
      />
    </div>
  )
}

export default SearchBar
