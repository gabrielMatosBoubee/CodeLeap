import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Singup from './pages/Singup';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Singup} />
      <Route path='/careers' component={ Main} />
    </BrowserRouter>
  );
}

export default App;
