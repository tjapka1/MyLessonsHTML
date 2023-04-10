import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App/App';
import TextIn from './TextIn/TextIn';
import TextOu from './TextOu/TextOu';
import Header from './Header/Header';
import Sada from './Sada/Sada';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Header/>
    <Sada/>
    <TextIn />
    <TextOu/> 
    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
