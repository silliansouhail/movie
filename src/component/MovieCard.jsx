import React, { useState } from 'react'

import "./MovieCard.css"

const MovieCard = (props) => {
  const [defined, setDefined] = useState(false)
  const toggleChange=()=>{
    setDefined(!defined)
  }
  return (
    <div className="movie__card" onChange={toggleChange} >
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        {/*<p className='desc'>{props.description}</p>*/}
        <div className="product__rating">
                {Array(props.rating).fill().map((_i)=>(
                    <p>⭐</p>
                ))}
            </div>
    </div>
  )
}

export default MovieCard