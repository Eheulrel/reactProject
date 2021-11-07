import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Board.css';

class Board extends React.Component{

    state = {
        page:1,
        boardList:[],
    }

    getBoard=async()=>{
        const Board = await axios.get('http://localhost:8989/boardList2?page='+this.state.page);
        this.setState({
            boardList:Board.data
        });

        if(this.state.boardList.length === 0) {
            alert("마지막 페이지 입니다.");
            this.prevPage();
        }
    }

    nextPage=async()=>{        
        await this.setState({page:this.state.page+1});
        this.getBoard();               
    }

    prevPage=async()=>{        
        if(this.state.page===1){
            alert("첫 페이지입니다.")
        }else{        
        await this.setState({page:this.state.page-1});
        this.getBoard();
        }
    }

    componentDidMount(){
        this.getBoard();
    }

    componentWillUnmount(){
        
    }

    render(  ){
        return (
            <div className="about__container" >
                <table className='table table-striped' >
                    <thead className='thead-dark'>
        
                <tr><th >글번호</th><th >글제목</th><th width="100">글쓴이</th><th width="300">작성일</th><th width="200">내용</th></tr>
                    </thead>
                    <tbody> 
                        {
                            this.state.boardList.map((item,index)=>{                               
                                if(item.parentNo===0){
                                    return <tr key={index}><td width="100">{item.articleNo}</td><td width="100" >
                                        <Link to={{pathname:'/board-detail',state:{item}}}><font size="2" title={item.content}>{item.title}</font></Link></td><td>{item.id}</td><td>{item.writeDate}</td><td>{item.content.slice(0,15)}</td></tr>
                                }else{
                                    let icon='↪️';
                                    for(let i=2;i<item.level;i++){
                                        icon += icon;
                                    }
                                    return <tr key={index}><td>{item.articleNo}</td><td><Link to={{pathname:'/board-detail',state:{item}}}><font size="2" title={item.content}>{icon}{item.title}</font></Link></td><td>{item.id}</td><td>{item.writeDate}</td><td>{item.content}</td></tr>
                                }
                            })                            
                        }                        
                    </tbody>
                </table>                
                <div style={{textAlign: 'center'}}>
                    <Link to='/board' onClick={this.prevPage}>{'<<'}</Link> &nbsp;
                    {this.state.page}페이지 &nbsp;
                    <Link to='/board' onClick={this.nextPage}>{'>>'}</Link>
                    <br/><br/>
                    <Link to={{pathname:"/board-write"}}>
                        <button className="btn btn-info"> 새글쓰기 </button> 
                    </Link> &nbsp;
                    <Link to={{pathname:"/"}}> 
                        <button className="btn btn-warning"> 홈으로 </button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default Board;