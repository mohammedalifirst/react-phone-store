import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import '../index.css'
import News from './News/News';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import ProductList from './shoppingcart/ProductList';
import Detail from './shoppingcart/Detail';
import Cart from './Cart';
import NavBar from './NavBar';
import Modal from './shoppingcart/Modal';
import Default from './shoppingcart/Default'

class App extends Component {
  render() {
    return (         
      <div className="App">
      <NavBar/>
      
      <div id="page-body">
        <switch>      
        <Route path="/" component={HomePage} exact />
        <Route path="/products" component={ProductList}  />
        <Route path="/details" component={Detail} />        
        <Route path="/cart" component={Cart} />         
        <Route path="/news" component={News} />
        <Route component={Default} />
        </switch>
        <Modal />
      </div>        
      </div>
      
    );
  }
}

export default App;