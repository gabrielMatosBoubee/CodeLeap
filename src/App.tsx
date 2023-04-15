import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Singup from './pages/Singup';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Singup}/>
    </BrowserRouter>
  );
}

export default App;
