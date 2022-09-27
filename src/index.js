import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Invoices from './components/Invoices';
import Prueba from './components/Prueba';

import history from './history';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App history={history} />} />
      <Route path="/Prueba" element={<Prueba history={history}/>}/>
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
