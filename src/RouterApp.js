import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./component/Navigation";
// import Detail from "./routes/Detail";
import Board from "./component/Board";
import BoardDetail from "./component/BoardDetail"
import BoardWrite from "./component/BoardWrite";
import BoardWrite2 from "./component/BoardWrite2";
import FoodDetail from "./routes/FoodDetail";
import Foodmap from "./routes/Foodmap";

class RouterApp extends React.Component{
    render(){
        return(
            <HashRouter>
                <Navigation />
                <Route path="/" exact={true} component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/board" component={Board}/>
                {/* <Route path="/movie-detail" component={Detail}/> */}
                <Route path="/food-detail" component={FoodDetail}/>
                <Route path="/board-detail" component={BoardDetail}/>
                <Route path="/board-write" component={BoardWrite}/>
                <Route path="/board-write2" component={BoardWrite2}/>
                <Route path="/map" component={Foodmap}/>
            </HashRouter>
        );
    }
}

export default RouterApp;