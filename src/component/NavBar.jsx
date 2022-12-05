import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <div id="NavBar" style={{backgroundColor: "tomato"}}>
            <Link to="/">Hand Doctor</Link>
            <br/>
            <Link to="/">병원예약</Link>
            <br/>
            <Link to="/">AI 질병 진단</Link>
            <br/>
            <Link to="/">소개</Link>
            <br/>
            <Link to="/signin/">Sign In</Link>
        </div>
    );
}
