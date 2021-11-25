import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from "./components/styles/ThemeProvider";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
