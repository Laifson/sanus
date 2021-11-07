import * as React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter,
        Routes,
        Route
} from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import finder from "./pages/finder";
import list from "./pages/list";
import board from "./pages/board"
import profile from "./pages/profile"
import Login from "./components/Login/Login";


function App() {

    return (
<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<home/>} />
        <Route path="/about" element={<about/>} />
        <Route path='/finder/*' element={<finder/>} />
        <Route path='/list' element={<list/>} />
        <Route path='/board' element={<board/>} />
        <Route path='/profile' element={<profile/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer />
</BrowserRouter>
    )
}

export default App;

