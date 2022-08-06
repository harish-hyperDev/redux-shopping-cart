import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/products/:id' component={SingleItem} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
