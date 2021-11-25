import * as React from "react";
import {
    Routes,
    Route, useLocation
} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import Finder from "./components/finder/Finder";
import List from "./components/list/List";
import Board from "./components/board/Board"
import Profile from "./components/pages/Profile"
import LoginPage from "./components/login/LoginPage";
import NavBarTop from "./components/navbars/NavBarTop";
import NavBarBottom from "./components/navbars/NavBarBottom";
import GlobalStyle from "./components/styles/GlobalStyle";
import {ContentDiv, NavBarBottomWrapper} from "./AppElements";
import PrivateRoute from "./routing/PrivateRoute";
import GithubRedirect from "./routing/GitHubRedirect";


function App() {
    const {pathname} = useLocation();

    return (
        <>
            <GlobalStyle/>
            {(pathname !== '/login') && <NavBarTop/>}
            <NavBarBottomWrapper>
                {(pathname !== '/login') && <NavBarBottom/>}
            </NavBarBottomWrapper>
            <ContentDiv>
                <Routes>
                    <Route path='/' element={
                        <PrivateRoute>
                            <Home/>
                        </PrivateRoute>
                    }/>
                    <Route path='/about' element={
                        <PrivateRoute>
                            <About/>
                        </PrivateRoute>
                    }/>
                    <Route path='/finder/*' element={
                        <PrivateRoute>
                            <Finder/>
                        </PrivateRoute>
                    }/>
                    <Route path='/list' element={
                        <PrivateRoute>
                            <List/>
                        </PrivateRoute>
                    }/>
                    <Route path='/board' element={
                        <PrivateRoute>
                            <Board/>
                        </PrivateRoute>
                    }/>
                    <Route path='/profile' element={
                        <PrivateRoute>
                            <Profile/>
                        </PrivateRoute>
                    }/>
                    <Route path='/oauth/github/redirect' element={<GithubRedirect/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </ContentDiv>
        </>
    )
}

export default App;

