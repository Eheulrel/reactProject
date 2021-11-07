import React from "react";
import "./About.css"

function About(props){
    return (
        <div className="about__container" >
            <h1> Team2 Project </h1>
            <h3> 김장후 </h3>
            <h3> 김태형 </h3>
            <h3 className="jojang"> 김현성 </h3>
        </div>
    );
}

export default About;