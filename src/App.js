import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import Product from './containers/Product/Product';
import Catalog from './containers/Catalog/Catalog';
import Blog from './containers/Blog/Blog';
import Article from './containers/Article/Article';
import Contacts from './containers/Contacts/Contacts';
import Cart from './containers/Cart/Cart';
import {connect} from 'react-redux';
import {fetchProducts} from './store/actions/products';

class App extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/catalog/:type" component={Catalog}/>
          <Route path="/catalog/:id" component={Product}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/blog/:id" component={Article}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/"/>
        </Switch>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  }
}

export default connect(null, mapDispatchToProps)(App);
