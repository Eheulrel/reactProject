import React from "react";
import './Board.css';
import {Link} from 'react-router-dom';
import axios from "axios";

class BoardWrite2 extends React.Component{

    boardWrite= async()=>{
        const {location}=this.props;
        const title_ele=document.getElementById('title');
        const content_ele=document.getElementById('content');       
        //  console.log(title_ele.value,content_ele.value);        

        const returnData=await axios.post('http://localhost:8989/boardWrite2',
        null,
        {params:{title:title_ele.value, content:content_ele.value, articleNO:location.state.articleNo}});
        alert(returnData.data);    
        this.props.history.push('/board'); 

    }

    render(  ){
       
        return (
            <div className="about__container">
               <div className="row">
                        <table className="table" style={{textAlign:'center'}} >
                            <thead>
                                <tr className="table-active">
                                    <th scope="col" style={{width: '50%' }} > 글제목 : <input id='title'/> </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colSpan="2"><textarea rows="10" cols="50" id='content'></textarea></td></tr>
                                <tr >
                                    <td colSpan="2">
                                        <button  className="btn btn-info" onClick={this.boardWrite} >등록</button>
                                         &nbsp;
                                         <Link to={{pathname:"/board", state:{}}}>
                                         <button  className="btn btn-info">취소</button>
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

export default BoardWrite2;