import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HTMLcomponents/cssComponent/font-awesome.min.css'
import './HTMLcomponents/cssComponent/elegant-icons.css'
import './HTMLcomponents/cssComponent/magnific-popup.css'
import './HTMLcomponents/cssComponent/nice-select.css'
import './HTMLcomponents/cssComponent/slicknav.min.css'
import './index.css';
import "bulma/css/bulma.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

