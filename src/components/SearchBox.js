import React, {useState} from 'react';


const SearchBox = (props) => {
  const [searchInput, setSearchInput] = useState('');


  const onChange = e => {
    setSearchInput(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <>
    <h3>Search</h3>
    <form onSubmit={onSubmit} className={props.class || 'searchBox'}>
      <label htmlFor='searchBox' style={{display:'none'}}> Search Box </label>
        <input 
          id='searchBox'
          type='text'
          placeholder={props.placeholder || 'Search'}
          value={searchInput}
          onChange={onChange}
          />
    </form>
    </>
  )
}

export default SearchBox;