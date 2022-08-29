import React from 'react'

const Course = ({course}) => {
    return(
        <>
        <h1>{course.name}</h1>
        <Parts parts={course.parts}/>
        <Counter parts={course.parts}/>
        </>

    )
}

const Counter = ({parts}) => {
    console.log(parts[0].exercises);
    return(
        <>
        <b>
            total of {parts.reduce((a, b)=> a+b.exercises,0)} exerices
        </b>
        </>
    )
}

const Parts = ({parts})=> {
    return(
        <>
        {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </>
    )
}

export default Course