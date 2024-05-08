import React, {useState} from 'react'

const MyForm = () => {
    const [value, setValue] = useState('Coconut');
    
    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value)
    }
    
    const handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + value)
        event.preventDefault()
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <label>
            Pick your favorite flavor:
            <select value={value} onChange={handleChange}>
                <option value="Grapefruit">Grapefruit</option>
                <option value="Lime">Lime</option>
                <option value="Coconut">Coconut</option>
                <option value="Mango">Mango</option>
            </select>
        </label>
        <input type="submit" value="Submit" />
    </form>
    )
}

export default MyForm

