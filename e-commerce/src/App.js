import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './screens/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/products' component={ProductsList}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
