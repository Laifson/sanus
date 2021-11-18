import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from "./components/styles/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
            <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
