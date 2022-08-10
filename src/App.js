import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Redirect,
  Navigate
} from 'react-router-dom';
import './App.css';

import {connect} from "react-redux";

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';

function App({currentItem}) {
  const useNavigate = Navigate()
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={Cart} />
          {!currentItem ? (<Redirect to='/' />) : (<Route exact path='product/:id' component={SingleItem} />)}
          <Route path='/products/:id' component={SingleItem} />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => { 
  return {
    currentItem: state.shop.currentItem,    
  }
}

export default App;
