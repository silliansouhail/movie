import React, { useState,useRef } from 'react'
import MovieCard from './MovieCard'
import {ImEye} from 'react-icons/im'
import {RxEyeClosed} from 'react-icons/rx'

import './MovieList.css'
import Filter from './Filter'

const MovieList = () => {
    const [toggle, setToggle] = useState(false)
    const [movieList, setMovieList] = useState([
        {
            id:1,
            name: 'Time Out',
            image: 'https://www.dvdfr.com/images/dvd/covers/200x280/847cca437110b700080618d6ae604f7c/57512/old-time_out.0.jpg',
            rating: 7,
        },
        {
            id: 2,
            name: 'John Wick',
            image: 'https://lionsgate.brightspotcdn.com/59/e8/576c91ae47e4aa7fd6240dc48674/john-wick-chapter-1-movies-poster-01.jpg',
            rating: 9,
        },
        {
            id: 3,
            name: 'Top Gun',
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg',
            rating: 8,
        },
        {
            id: 4,
            name: 'Day Shift',
            image:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/759d80152848903.6324e2fd77f4b.jpg',
            rating:6,
        }
    ])

    const n = useRef();
    const i = useRef();
    const r = useRef();

    const change = ()=>{
        setToggle (!toggle);
    }
    const add=()=>{
        setMovieList([...movieList,
            {
                id: movieList.length+1,
                name:n.current.value,
                image:i.current.value,
                rating:r.current.value,
            },
        ]);
        setToggle(!toggle)
    };
  return (
    <div className="movie__list">

        <Filter movieList={movieList} setMovieList={setMovieList}/>
        
        {!toggle&&<button className="change" onClick={change}> 
            <ImEye/>
                </button>
        }
        {toggle&&<button className="change" onClick={change}>
            <RxEyeClosed/>
                </button>
        }
        {toggle&&<div className="forme">
            <input type="text" ref={n} placeholder="Movie Name" />
            <input type="text" ref={i} placeholder="Movie Image" />
            <input type="text" ref={r} placeholder="Movie Rating 1 to 10" />
            <button onClick={add}>Save Movie</button>
        </div>}
        {/*<div className="list">

            {movieList.map(({...movieList})=>{
                return(
                    <MovieCard
                    key={movieList.id}
                    title={movieList.name}
                    image={movieList.image}
                    rating={movieList.rating}/>
                    )
            })}
        </div>*/}
        
    </div>

)
}

export default MovieList