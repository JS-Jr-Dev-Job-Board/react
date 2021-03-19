import React, { useState } from 'react'
import { Box, Form, TextInput, Grommet } from 'grommet'
import { Search } from 'grommet-icons'
import { grommet } from 'grommet/themes'
import { useRecoilState } from 'recoil'
import { mainSearchQuery } from '../store/atom'

// Optional props for this component are:
// 1. 'placeholder', which sets placehold text in the search field and defaults to 'Search' and
// 2. 'name', which sets the value on the TextInput's name and id attributes and defaults to 'searchBox'.

const SearchBox = (props) => {
  const [searchQuery, setSearchQuery] = useRecoilState(mainSearchQuery)
  const [searchInput, setSearchInput] = useState(searchQuery)

  //All optional props used in this component.
  const searchInfo = props.name || 'searchBox'
  const addPlaceholder = props.placeholder || 'Search'

  const onChange = (e) => {
    setSearchInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(searchInput)
  }

  return (
    <Grommet theme={grommet}>
      <Box>
        <Box width='25%' alignSelf='end' margin='10px'>
          <Form onSubmit={onSubmit}>
            <Box direction='row' align='center'>
              <Box margin='10px'>
                <Search />
              </Box>
              <TextInput
                size='small'
                width='small'
                a11yTitle='Search Box Text Field'
                name={searchInfo}
                id={searchInfo}
                type='search'
                placeholder={addPlaceholder}
                value={searchInput}
                onChange={onChange}
              />
            </Box>
            {searchQuery && <h2>Your search is: {searchQuery}</h2>}
          </Form>
        </Box>
      </Box>
    </Grommet>
  )
}

export default SearchBox
