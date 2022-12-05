import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";

// Routing 될 모든 Page는 여기서 관리
export default function Router() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/signin/" element={<SignInPage/>}/> 
                <Route path="/signup/" element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
