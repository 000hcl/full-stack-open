import React, { useState } from 'react'
import Filterer from './components/Filterer'
import Renderer from './components/Renderer'
import AddContactForm from './components/AddContact'



const App = () => {
  let personList = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]
  const [persons, setPersons] = useState(personList) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const updatePersons = (event) => {
    event.preventDefault()
    const person = {name: newName, number: newNumber}
    console.log(persons.includes(person))
    console.log(persons)
    console.log(person)
    console.log(persons.filter(p => p.name === person.name))
    if(persons.filter(p => p.name === person.name).length >0){
      
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(person))
    }
    
    setNewName('')
    setNewNumber('')
  }

  const fieldChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const numberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const filterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <Filterer newFilter={newFilter} handleChange={filterChange}/>
      </div>
      <h2>Add a new contact</h2>
      <AddContactForm submitAction ={updatePersons} nameHandler={fieldChange} numberHandler={numberChange} nameValue={newName} numberValue={newNumber}/>
      <h2>Numbers</h2>
      <Renderer list={persons} includes={newFilter}/>

    </div>
  )

}

export default App