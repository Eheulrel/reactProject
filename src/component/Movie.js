import React from "react";
import {Link} from 'react-router-dom';
import './Movie.css';

function Movie({id, title, year, summary, medium_cover_image, genres}){
    return (
        <div className="movie">
        <Link to={{pathname:'/movie-detail',
        state:{id,year,title,summary,medium_cover_image,genres}}}>
            <img src={medium_cover_image} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genres,index)=>{
                        return <li key={index} className="movie__genre">
                            {genres}
                        </li>
                    })}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </Link>
        </div>
    );
}

export default Movie;