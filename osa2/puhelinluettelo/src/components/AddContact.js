import React from 'react'

const AddContactForm = ({submitAction, nameHandler, numberHandler, nameValue, numberValue}) => {
    return(
        <form onSubmit={submitAction}>
            name: <input value={nameValue} onChange={nameHandler}/>
            <br/>
            number: <input value={numberValue} onChange={numberHandler}/>
            <br/>
            <button type='submit'>add</button>

        </form>
    )
}

export default AddContactForm