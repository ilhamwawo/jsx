import React from 'react'

const InputWithTable = ({id, label, value, type="text", onInputChange}) => {

  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        >
    </div>
  )
}

export default InputWithTable