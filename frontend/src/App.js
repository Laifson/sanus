import * as React from "react";
import NavBarTop from "./components/navbar/NavBarTop";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import Finder from "./components/finder/Finder";
import List from "./components/list/List";
import Board from "./components/board/Board"
import Profile from "./components/pages/Profile"
import LoginPage from "./components/login/LoginPage";
import NavBarBottom from "./components/navbar/NavBarBottom";
import GlobalStyle from "./components/styles/GlobalStyle";
import {ContentDiv, NavBarBottomWrapper} from "./AppElements";


function App() {

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <NavBarTop/>
            <NavBarBottomWrapper>
                <NavBarBottom/>
            </NavBarBottomWrapper>
            <ContentDiv>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path='/finder/*' element={<Finder/>}/>
                    <Route path='/list' element={<List/>}/>
                    <Route path='/board' element={<Board/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </ContentDiv>
        </BrowserRouter>
    )
}

export default App;

