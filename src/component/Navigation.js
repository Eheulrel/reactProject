import axios from "axios";
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Navigation.css';

// class Navigation extends React.Component{
//     state={count:0}

//     a=()=>{
//         this.useState({count:this.count+1});
//     };

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//                 <button onClick={this.a}>add</button>
//             </div>
//         );
//     }
// }

async function logout(){
    // const resultData = await axios.post('http://localhost:8989/logout');
    sessionStorage.removeItem("logined_name");       
    sessionStorage.removeItem("JSESSIONID");   
    window.location.reload();   
}

function Navigation(){
    const [name, setName] = useState('');
    const logined_name=sessionStorage.getItem("logined_name");

    return (
        <div className="nav">
            { (name ? name : logined_name) ? (
                <div>{name ? name : logined_name}님<br />안녕하세요 
                <button className="btn btn-danger" onClick={logout}>로그아웃</button></div>
            ) :
            (<div id="loginDiv">
                <input size="5" id="id" placeholder="아이디"/><br/>
                <input size="5" type="password" id="pw" placeholder="비밀번호"/><br />
                <button className="btn btn-success" onClick={ async()=>{
                        const id_ele=document.getElementById("id");
                        const pw_ele=document.getElementById("pw");
                        // console.log(id_ele.value, pw_ele.value);
                    
                        const axios2 = axios.create({
                            withCredentials: true
                        });
                        const resultData=await axios2.post('http://localhost:8989/login',null,
                        {params:{id:id_ele.value, pw:pw_ele.value}});
                        
                        const name=resultData.data.name;
                        setName(name);
                        sessionStorage.setItem("logined_name",name);

                        // const sessionId=resultData.data.JESSIONID;
                        // sessionStorage.setItem("JESSIONID",sessionId);

                        if(!name){
                            alert("다시 로그인하세요");
                        }
                    } }>로그인</button>
            </div>)}
            
            <br />
            <Link to="/">홈</Link>
            <Link to="/board">맛집후기</Link>
            <Link to={{pathname:'/about',state:{fromNavigation:true}}}>About</Link>
        </div>
    );
}

export default Navigation;