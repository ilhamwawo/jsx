import React from 'react'

const Movie = (props) => {
  return (
    <div className='cardx'>      
        <img src={props.image} alt="" width={200} />
        <h2>{props.title}</h2>
        <p>Year: {props.year}</p>
    </div>
  )
}

export default Movie