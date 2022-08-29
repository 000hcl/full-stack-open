import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const deleteContact = id => {
    const url = `${baseUrl}/${id}`
    const request = axios.delete(url)
    return request.then(response => response.data)
}

const update = (id, newContact) => {
    const url = `${baseUrl}/${id}`
    const request = axios.put(url, newContact)
    return request.then(response => response.data)
}

const contactService = {
    getAll,
    create,
    deleteContact,
    update
}
export default contactService