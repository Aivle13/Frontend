import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";

export default function SignInPage() {
  
    const [userId, setUserId] =  useState('');
    const [password, setPassword] =  useState('');

    function signIn() {
        axios.post("http://localhost:8000/user/signin/", // POST 방식으로 http://localhost:8000/user/signin/에게 Request
            {'id': userId, 'password': password}) // POST 방식 내부 데이터
        .then(function() { // Response가 성공일 때 function 실행
            alert("성공했습니다!")
        })
        .catch(function() { // Response가 실패일 때 function 실행
            alert("실패했습니다!")
        })
    }
  
    return (
        <div>  
            <NavBar/>
            <input type="text" onChange={function (e) {setUserId(e.target.value)}} />
            <input type="password" onChange={function (e) {setPassword(e.target.value)}} />
            <button onClick={signIn}>로그인</button>

            <br/>
            <p>아이디가 없으시다면</p>
            <Link to="/signup/">회원가입하러 가기</Link>
        </div>
    )

}