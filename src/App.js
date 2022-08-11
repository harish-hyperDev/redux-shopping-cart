import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //  Redirect,
  Navigate,
  // useNavigate
} from 'react-router-dom';
import './App.css';

import { connect } from "react-redux";

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';

function App({ currentItem }) {
  // const navigate = useNavigate()
  return (
    <Router>
      <div className='App'>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/product/:id' element={<SingleItem />} />

        {!currentItem ? (
            <Route element= { <Navigate replace to="/" /> }/>
          ) : (
            <Route exact path="/product/:id" element={<SingleItem />} />
          )}

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

export default connect(mapStateToProps)(App);
