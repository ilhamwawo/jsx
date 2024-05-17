import React, { useEffect , useState} from 'react'
import City from './City'

const CityList = () => {
    const [citylist, setCityList] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://63b0de55f9a53fa2026fc1f4.mockapi.io/api/v1/results')
            const  [{ city_list }] = await data.json();
            // console.log(city_list)
            setCityList(city_list)
        } 
        fetchData() 
    }, [citylist.length])
  return (
    <div>
        <h2>City List</h2>
        <div className='row'>
            {citylist.map((city) => {
                return (
                    <div key={city.id}>
                        <City 
                            title={city.name}
                            month={city.month}
                            image={city.image}
                        />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CityList