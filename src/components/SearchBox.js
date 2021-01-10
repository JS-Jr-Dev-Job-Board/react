import React, { useState } from 'react';

const allJobs = [
  {
    Company: 'A',
    Salary: '77,000',
    Title: 'Jr. JS Dev',
    Location: 'Remote',
  },
  {
    Company: 'B',
    Salary: '55,000',
    Title: 'Intern',
    Location: 'OKC',
  },
  {
    Company: 'C',
    Salary: '66,000',
    Title: 'Front-End React Dev',
    Location: 'Miami, FL',
  },
  {
    Company: 'D',
    Salary: '88,000',
    Title: 'Jr/Mid Jr Dev',
    Location: 'Bar Harbor, ME',
  },
]


const SearchBox = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  console.log(">>>>>>>>>>>>>>>>>>", searchResults);

  const onChange = e => {
    setSearchInput(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    
    setSearchResults([]);
    alert('enter was hit')
    
    const emptyArr = [];
    allJobs.forEach(job => {
      for (let item in job) {
        if (job[item].toLowerCase().includes(searchInput.toLowerCase())) {
          emptyArr.push(job);          
        }
      }
    })
    setSearchResults(emptyArr);
  }


  return (
    <>
      <h3>Search</h3>
      <form onSubmit={onSubmit} className={props.class || 'searchBox'}>
        <label htmlFor='searchBox' style={{ display: 'none' }}> Search Box </label>
        <input
          id='searchBox'
          type='text'
          placeholder={props.placeholder || 'Search'}
          value={searchInput}
          onChange={onChange}
        />
      </form>
      <div>
        {/* Make this work! */}
        {'There are companies with the following jobs matching your search:', searchResults > 0 ? 'something here' : null}
        {/* {searchResults.map(result => <p key={Date.now()}>{result.Title}</p>)} */}
      </div>
    </>
  )
}

export default SearchBox;