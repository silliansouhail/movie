import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import {GrSearch} from 'react-icons/gr'

const Filter = ({movieList,setMovieList}) => {
    const [movie, setMovie] = useState(movieList)
    useEffect(() => {
        setMovie(movieList)
    }, [movieList])
    
    const filterMovie=e=>{
        const search= e.target.value.toLowerCase()
        const filteredMovie= movieList.filter(movie =>movie.name.toLowerCase().includes(search))
        setMovie(filteredMovie)
    }
    const findRating =e=>{
        let select= e.target.value
        if(select>10) {
            select=10;
        }
        const filteredRating =movieList.filter(movie => movie.rating >=select)
        setMovie(filteredRating)
    }
  return (
    <div className='filter' >
        <input type="text" placeholder='Name of the Movie' onChange={(e)=>filterMovie(e)}/>
        <input type="number" placeholder='n°⭐'onChange={(e)=>findRating(e)} />
        <button><GrSearch/></button>
        <div className="list">
            {movie.map(({...movie})=>{
                    return(
                            <MovieCard
                                key={movie.id}
                                title={movie.name}
                                image={movie.image}
                                rating={movie.rating}/>
                                )
                            })}
        </div>
    </div>
  )
}

export default Filter