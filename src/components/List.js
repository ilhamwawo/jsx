import React, { useEffect, useState } from 'react'
import Movie from './Movie';

const List = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading]  = useState(true)

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://www.omdbapi.com/?apikey=f2343b49&type=movie&s=transformers');
            // console.log(data)
            const { Search } = await data.json();
            // console.log(Search) 

            setMovies(Search)
            setLoading(false)
        }
        fetchData();
    }, [movies.length])
  return (
    <div>
        <h2>Movies</h2>
        <div className='row'>
            {loading ? (
                <div>Loading...</div>
            ) : (
            movies.map((movie) => {
               return (
                <div key={movie.imdbID}>
                    <Movie      
                    title={movie.Title}
                    year={movie.Year}
                    image={movie.Poster}
                />
                </div> 
               )     
            })
            )}
        </div>
    </div>
  )
}

export default List