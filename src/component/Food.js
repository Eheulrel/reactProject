import React from "react";
import './Movie.css';
import {Link} from 'react-router-dom';
// import Pagenation from "./Pagenation";


function Food({id, title, phone, content, medium_cover_image, city, lat, lng, menu, gugun,time}){

    // const indexOfLast = currentPage * postsPerPage;
    // const indexOfFirst = indexOfLast - postsPerPage;
    // function currentPosts(tmp) {
    //     let currentPosts = 0;
    //     currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    //     return currentPosts;
    // }

    return (
        <div className="movie">
            <Link to={{pathname:'/food-detail',
        state:{id,phone,title,content,medium_cover_image,city, lat, lng, menu, gugun, time}}}>
            <img src={medium_cover_image} alt={title} title={title}/>            
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{phone}</h5>
                <h6 className="movie__genres">{gugun}</h6>              
                <p className="movie__summary">{content.slice(0,70)}...</p>                
            </div>
            </Link>
        </div>
    );
}

export default Food;