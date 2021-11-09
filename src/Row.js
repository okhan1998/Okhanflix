import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
const base_URL = 'https://image.tmdb.org/t/p/original/'

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters'>
                {/* several row_poster(s) */}
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.title ? movie.title : movie.name}/>
                ))}
            </div>

        </div>
    )
}

export default Row
