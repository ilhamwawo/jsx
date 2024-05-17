import React, { useState } from 'react'

const PasswordChecker = () => {

    const [password, setPassword] = useState("")

    const [strenght, setStrenght] = useState("")

    const handleChange = (e) => {
        setPassword(e.target.value)
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        
        if (password.length < 6) {
            // alert(`your password is    ${password}   weak` )
            e.preventDefault()
            setStrenght('weak')
        } else if (password.length >= 6 && password.length <=10) {
            // alert(`your password is    ${password}   medium` )
            e.preventDefault()
            setStrenght('medium')
        } else {
            // alert(`your password is    ${password}   strong` )
            e.preventDefault()
            setStrenght('strong')
        }
        console.log(alert.value)
    }

  return (
    
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="password" name="" id="" value={password} />
            
            <p style={{ color: 
                strenght === "weak" ? "red"
                : strenght === "medium" ? "orange"
                : "green"
            }}> 
            your password is {strenght}
            </p>
        </form>
    </div> 
  )
}

export default PasswordChecker