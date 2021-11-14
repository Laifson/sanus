import * as React from "react";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter,
        Routes,
        Route
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Finder from "./components/pages/Finder";
import List from "./components/pages/List";
import Board from "./components/pages/Board"
import Profile from "./components/pages/Profile"
import LoginPage from "./components/login/LoginPage";

function App() {

    return (
<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/finder/*' element={<Finder/> } />
        <Route path='/list' element={<List/>} />
        <Route path='/board' element={<Board/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<LoginPage/>} />
    </Routes>
    <Footer />
</BrowserRouter>
    )
}

export default App;

