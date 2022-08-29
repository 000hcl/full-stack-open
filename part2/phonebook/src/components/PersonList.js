import React from 'react'

const includesCaseInsensitive = (a, b) => {
    return(
      a.toUpperCase().includes(b.toUpperCase())
    )
}

const PersonList = ({persons, include, delFunction}) => {
    const filtered = persons.filter(person => includesCaseInsensitive(person.name, include))
    return(
        filtered.map(person => <p key={person.id}>{person.name} {person.number} <button onClick={()=>delFunction(person.id)}>delete</button></p>)
    )
}
export default PersonList