import React, { useState } from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0)

    

    const handleChangeincreased = () => { 
        setCount(count + 1)
    }

    const handleChangeDecreased = () => {
        setCount(Math.max(count - 1,0))
        
    }


    return (
        <div>
            <p>{count}</p>
            <button onClick={handleChangeincreased}>Increased</button>
            <button onClick={handleChangeDecreased}>Decreased</button>

        </div>
    )
}

export default Counter