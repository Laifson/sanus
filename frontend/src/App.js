import * as React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter,
        Routes,
        Route
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Finder from "./pages/finder";
import List from "./pages/list";
import Board from "./pages/board"
import Profile from "./pages/profile"
import Login from "./components/Login/Login";


function App() {

    return (
<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={Home} />
        <Route path="/about" element={<About/>} />
        <Route path='/finder/*' element={<Finder/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/board' element={<Board/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer />
</BrowserRouter>
    )
}

export default App;

