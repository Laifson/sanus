import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from "./components/styles/ThemeProvider";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress &&
        <h1>Hey some async call in progress ! </h1>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ThemeProvider>
                    <LoadingIndicator/>
                    <App/>
                </ThemeProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
