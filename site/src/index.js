import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import cadastrar from './cadastrar/cadastro.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<cadastrar/>}/>
        <Route path='/consulta' element={<consulta/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

