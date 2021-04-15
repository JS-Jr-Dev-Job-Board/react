import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { mainSearchQuery } from '../../store/atom'
import StyledSearchBox from './StyledSearchBox'
// Optional props for this component are:
// 1. 'placeholder', which sets placehold text in the search field and defaults to 'Search' and
// 2. 'name', which sets the value on the TextInput's name and id attributes and defaults to 'searchBox'.

const SearchBox = (props) => {
  const [searchQuery, setSearchQuery] = useRecoilState(mainSearchQuery)
  const [searchInput, setSearchInput] = useState(searchQuery)

  //All optional props used in this component.
  const searchInfo = props.name || 'searchBox'
  const addPlaceholder = props.placeholder || 'Search'

  const changeHandler = (e) => {
    setSearchInput(e.target.value)
    if (!e.target.value) {
      setSearchQuery(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setSearchQuery(searchInput)
  }

  return (
    <StyledSearchBox onSubmit={submitHandler}>
      <label htmlFor='searchbox'>
        <input
          type='search'
          aria-label='Search Box Text Field'
          name={searchInfo}
          id={searchInfo}
          placeholder={addPlaceholder}
          value={searchInput}
          onChange={changeHandler}
        />
      </label>
      {searchQuery && <h2>Your search is: {searchQuery}</h2>}
    </StyledSearchBox>
    
  )
}

export default SearchBox
