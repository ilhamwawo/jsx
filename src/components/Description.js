import React from 'react'

const Description = (props) => {
  return (
    <div>
        <h3>Description:</h3>
        <p>{props.description}</p>
        <p>{props.category}</p>
    </div>
  )
}

export default Description