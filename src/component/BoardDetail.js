import React from "react";
import {Link} from 'react-router-dom';

class BoardDetail extends React.Component{

    state = {
        id:0,
        articleNo:0,        
       title :"",
       content:""
    }
 
    getBoard=async()=>{
        const {location}=this.props;
        
        this.setState({
            id:location.state.item.id,
            title:location.state.item.title,
            content:location.state.item.content, 
            articleNo:location.state.item.articleNo,  
        });
    }

    componentDidMount(){
        const {location, history}=this.props;
        if(location.state===undefined){
            history.push('/board');               
        }else{
            this.getBoard(location.state.item.articleNo); 
        }                   
        console.log(location);
    }

    render(  ){
        const articleNo = this.state.articleNo;
        return (
            <div className="about__container" >
               
                <table className='table table-striped' >
                    <thead className='thead-dark'>
        
                <tr><th>글제목 : {this.state.title} </th><th >글쓴이 : {this.state.id} </th></tr>
                    </thead>
                    <tbody>                         
                      < tr><th> 내용 : {this.state.content.split("\n").map((line) => { //this.props.data.content: 내용
                        return (
                        <span>
                            {line}
                            <br />
                        </span>
                        );
                    })} </th></tr>                    
                    </tbody>
                </table>
                <div style={{textAlign: 'center'}}>
                    
                    <Link to={{pathname:"/board-write2",state:{articleNo}}}>
                        <button className="btn btn-info"> 답글쓰기 </button> 
                    </Link> &nbsp;
                    <Link to={{pathname:"/board"}}> 
                        <button className="btn btn-warning"> 목록으로 </button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default BoardDetail;