import React from 'react';//import react library 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './destructuring';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));//render the root id from index.html
root.render(
  <React.StrictMode>
    <App /> //Call the function 'App'
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
