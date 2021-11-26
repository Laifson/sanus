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
import Kanban from "./components/kanban/Kanban";
import "../node_modules/@syncfusion/ej2-react-kanban/styles/material.css";
import useTherapists from "./hooks/useTherapists";

function App({loading}) {
    const {pathname} = useLocation();
    const {
        therapists,
        setTherapists,
        cardData,
        setCardData,
        removeTherapist,
        handleSaveAll,
        saveTherapist,
        handleChangeStatus,
        handleSearchButton
    } = useTherapists()

    return (
        <>
            <GlobalStyle/>
            {(pathname !== '/login') && <NavBarTop/>}
            <NavBarBottomWrapper>
                {(pathname !== '/login') && <NavBarBottom/>}
            </NavBarBottomWrapper>
            <ContentDiv>
                <Routes>
                    <Route path='/oauth/github/redirect' element={<GithubRedirect/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/' element={
                        <PrivateRoute>
                            <Home
                                therapists={therapists}
                            />
                        </PrivateRoute>
                    }/>
                    <Route path='/about' element={
                        <PrivateRoute>
                            <About/>
                        </PrivateRoute>
                    }/>
                    <Route path='/finder/*' element={
                        <PrivateRoute>
                            <Finder
                                cardData={cardData}
                                setCardData={setCardData}
                                handleSearchButton={handleSearchButton}
                                handleSaveAll={handleSaveAll}
                                saveTherapist={saveTherapist}
                            />
                        </PrivateRoute>
                    }/>
                    <Route path='/list' element={
                        <PrivateRoute>
                            <List
                                therapists={therapists}
                                setTherapists={setTherapists}
                                removeTherapist={removeTherapist}
                            />
                        </PrivateRoute>
                    }/>
                    <Route path='/board' element={
                        <PrivateRoute>
                            <Board
                                therapists={therapists}
                                handleChangeStatus={handleChangeStatus}
                                removeTherapist={removeTherapist}
                            />
                        </PrivateRoute>
                    }/>
                    <Route path='/profile' element={
                        <PrivateRoute>
                            <Profile/>
                        </PrivateRoute>
                    }/>
                    <Route path='/kanban' element={
                        <PrivateRoute>
                            <Kanban/>
                        </PrivateRoute>
                    }/>
                </Routes>
            </ContentDiv>
        </>
    )
}

export default App;

