import React from 'react'

const Filterer = ({newFilter, handleChange}) => {
    return(
        <div>
            <input value={newFilter} onChange={handleChange}/>
        </div>
    )
}

export default Filterer