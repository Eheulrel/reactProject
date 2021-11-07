import React from "react";
import "./Detail.css";
import { Link } from "react-router-dom";

class FoodDetail extends React.Component{
    state = {
        
    }

    getMapDetail=async()=>{
       
    }

    componentDidMount(){
        const {location, history}=this.props;
        if(location.state===undefined){
            history.push('/');
        }
    }

    render(){
        const {location} = this.props;       
      
        if(location.state){            
            return (
                <div className="detail__container">
                    <img src={location.state.medium_cover_image} 
                    alt={location.state.title} title={location.state.title} width="400" height="400"/>
                    <h2 className="movie__tit_detail"><span>{location.state.title}</span></h2>
                    <h4 className="movie__year_detail"> {location.state.phone} &nbsp;|&nbsp;
                    {location.state.city} &nbsp;
                    <Link to={{pathname:'/map',state:{
                        lat:location.state.lat, lng:location.state.lng, title:location.state.title,
                        phone:location.state.phone, menu:location.state.menu}}}>🗺️</Link>  </h4>  
                    <h5>{location.state.time}</h5>                              
                    <p className="movie__sum_detail">{location.state.content}</p> 
                    <Link to={{pathname:'/'}}>
                        <p className="btn btn-primary">목록으로</p>
                    </Link>
                    &nbsp;
                    <Link to={{pathname:'/board-write',
                       state:{title:location.state.title, menu:location.state.menu, 
                        gugun:location.state.gugun, phone: location.state.phone,
                        medium_cover_image: location.state.medium_cover_image,
                        city: location.state.city,
                        lat: location.state.lat,
                        lng: location.state.lng,                    
                        id: location.state.id,
                        content: location.state.content
                        }
                    }}>
                        <p className="btn btn-warning">공유하기</p>
                    </Link>
                </div>
            );
        }else{
            return "푸드디테일";
        }
    }
}
export default FoodDetail;