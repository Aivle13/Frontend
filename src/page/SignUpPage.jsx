import { useState } from "react";
import axios from "axios";
import NavBar from "../component/NavBar";
import { useNavigate } from "react-router-dom";


export default function SignUpPage({history}) {
    const [userId, setUserId] =  useState('');
    const [password, setPassword] =  useState('');

    const navigate = useNavigate(); // useNavigate: 화면을 변경하고 싶을 때 사용

    function signup() {
        axios.post("http://localhost:8000/patient/signup/", // POST 방식으로 http://localhost:8000/user/signup/에게 Request
            {"patient_name": userId, "patient_password": password} // POST 방식 내부 데이터
        )
        .then(function(response) { // Response가 성공일 때 function 실행
            alert("회원가입 성공!")
            navigate("/")
        })
        .catch(function(error) { // Response가 실패일 때 function 실행
            alert("회원가입 실패!")
        })
    }

    return (
        <div>
            <NavBar/>
            <input type="text" onChange={function (e) {setUserId(e.target.value)}} />
            <input type="password" onChange={function (e) {setPassword(e.target.value)}} />
            <button onClick={signup}>회원가입</button>
        </div>
    )

}