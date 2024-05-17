import React from 'react'

const City = (props) => {
  return (
    <div className='cardx'>
        <img src={props.image} alt={props.title} width={200} />
        <h2>{props.title}</h2>
        <p>Month: {props.month}</p>
    </div>
  )
}

export default City