import React from 'react'
import Contact from './Contact'

const filterList = (list, isIncluded) => {
    return(
      list.filter(person => includesCaseInsensitive(person.name, isIncluded))
    )
  }
  
  const includesCaseInsensitive = (a, b) => {
    return(
      a.toUpperCase().includes(b.toUpperCase())
    )
  }

const Renderer = ({list, includes}) => {
    const filteredList = filterList(list, includes)
    return(
    <div>
      {filteredList.map(person => <Contact key={person.name} person={person}/>)}
    </div>
    )
}

export default Renderer