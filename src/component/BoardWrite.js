import React from "react";
import './Board.css';
import {Link} from 'react-router-dom';
import axios from "axios";
axios.defaults.withCredentials = true;

class BoardWrite extends React.Component{

    state= {
        contentInfo:"",
        id: "",
        phone: "",
        title: "",
        content: "",
        medium_cover_image: "",
        city: "",
        lat: "",
        lng: "",
        menu: "",
        gugun: "",
        cancelButton:"/board"
    }

    boardWrite= async()=>{
        const title_ele=document.getElementById('title');
        const content_ele=document.getElementById('content');
        console.log(title_ele.value,content_ele.value);

        const axios2 = axios.create({
            withCredentials: true
          });
        const returnData=await axios2.post('http://localhost:8989/boardWrite',
        null,
        {params:{title:title_ele.value, content:content_ele.value}});
        alert(returnData.data);    
        this.props.history.push('/board');    
    }

    setFoodInfo = async () => {
        const { location } = this.props;
//        합치면서 변수명 변경
//        const foodInfo = location.state.foodName+"\n"+location.state.RPRSNTV_MENU+"\n"+location.state.gugun+"\n"+location.state.tel+"\n--------------------\n";
        const foodInfo = location.state.title+'\n'+location.state.menu+"\n"+location.state.gugun+"\n"+location.state.phone+"\n--------------------\n";

        await this.setState({
        contentInfo:foodInfo,
        id: location.state.id,
        phone: location.state.phone,
        title: location.state.title,
        content: location.state.content,
        medium_cover_image: location.state.medium_cover_image,
        city: location.state.city,
        lat: location.state.lat,
        lng: location.state.lng,
        menu:location.state.menu,
        gugun:location.state.gugun,
        cancelButton:"/food-detail"
        });
    }

    componentDidMount() {
        if(this.props.location.state){
            this.setFoodInfo();
        }
    }

    render(  ){
       
        return (
            <div className="about__container">
               <div className="row" >
                        <table className="table" style={{textAlign:'center'}} >
                            <thead className="thead">
                                <tr className="table-active">
                                    <th scope="col" style={{width: '50%' }} > 글제목 : <input id='title'/> </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colSpan="2"><textarea rows="10" cols="50" id='content' defaultValue={this.state.contentInfo}></textarea></td></tr>
                                <tr >
                                    <td colSpan="2">
                                        <button  className="btn btn-info" onClick={this.boardWrite} >등록</button>
                                         &nbsp;                                        
                                        <Link to={{pathname:this.state.cancelButton,
                                                    state:{ id: this.state.id,
                                                    phone: this.state.phone,
                                                    title: this.state.title,
                                                    content: this.state.content,
                                                    medium_cover_image: this.state.medium_cover_image,
                                                    city: this.state.city,
                                                    lat: this.state.lat,
                                                    lng: this.state.lng,
                                                    menu: this.state.menu,
                                                    gugun: this.state.gugun} 
                                                }}>
                                         <button  className="btn btn-warning">취소</button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>        
            </div>
        );
    }
}

export default BoardWrite;