import { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import Form from './components/AddNew'
import Filter from './components/Filter'
import contactService from './services/contacts'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleSuccess = (message) => {
    setSuccessMsg(message)
    setTimeout(() => {
      setSuccessMsg(null)
    }, 5000)
  }

  const handleError = (message) => {
    setErrorMsg(message)
    setTimeout(() => {
      setErrorMsg(null)
    }, 5000)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)

  }

  const handleDelete = (id) => {
    const person = persons.find(person=>person.id===id)
    if (window.confirm(`Delete ${person.name}?`)===true){
      contactService.deleteContact(id)
      .then(deleted =>{
        setPersons(persons.filter(person=>person.id!==id))
        handleSuccess(`${person.name} successfully deleted`)
      }).catch(error =>{
        handleError(`Information on ${person.name} has already been removed from server`)
        setPersons(persons.filter(person=>person.id!==id))
      }

      )
    }

    
  }

  const changeNumber = (id, newNumber) => {
    const contact = persons.find(person=>person.id===id)
    const changed = {...contact, number: newNumber}
    contactService
    .update(id, changed)
    .then(updated=>{
      setPersons(persons.map(person=>person.id !== id ? person : updated))
      setNewName('')
      setNewNumber('')
      handleSuccess('Number successfully updated')
    }).catch(error=>{
      handleError(`Information on ${contact.name} has already been removed from server`)
      setPersons(persons.filter(person=>person.id!==id))
    }
    )

  }

  useEffect(() => {
    contactService
    .getAll()
    .then(contacts => {
      setPersons(contacts)
    })
  },[])

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      const person = persons.find(p=>p.name===newName)
      console.log(person);
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)===true) {
        changeNumber(person.id, newNumber)
        
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      contactService
        .create(newPerson)
        .then(
          newContact => {
            setPersons(persons.concat(newContact))
            setNewName('')
            setNewNumber('')
            handleSuccess(`${newName} added`)
          }

        )
      
      
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMsg} error={false}/>
      <Notification message={errorMsg} error={true}/>
      <Filter handleFilter={handleFilter}/>
      <h2>Add new</h2>
      <Form handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} addName={addName}/>
      <h2>Numbers</h2>
      <PersonList persons={persons} include={filter} delFunction={handleDelete}/>
    </div>
  )
}

export default App