import React from 'react'

const Header = ({course}) => {
    return(
      <h2>{course.name}</h2>
    )
  }
  
  const Total = ({ex}) => {
    return(
      <p>
        <b>
        Number of exercises {ex.map(part => part.exercises).reduce(find_total)}
        </b>
      </p>
    )
  }
  
  
  const find_total = (prev,curr) => prev+curr;
  
  const Course = ({course}) => {
    return(
      <div>
        <Header course={course} />
        <Parts prts={course.parts} />
        <Total ex={course.parts} />
      </div>
    )
  }
  
  const Parts = ({prts}) => {
    return(
      <div>
        {prts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
      </div>
    )
  }

export default Course