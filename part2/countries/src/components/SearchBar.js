import React from 'react'

const SearchBar = ({handler, val}) => <input onChange={handler} value={val}></input>

export default SearchBar