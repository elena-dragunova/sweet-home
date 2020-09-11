import React, { Component } from 'react'
import styles from './Catalog.module.css'
import { connect } from 'react-redux'
import TitleSection from '../../components/UI/TitleSection/TitleSection'
import Products from '../../components/Catalog/Products/Products'
import Loader from '../../components/UI/Loader/Loader';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }
  }

  filterCatalogItemsByCategory() {
    const category = this.props.match.params.type;
    const sub = this.props.match.params.sub;
    const catalog = this.props.catalog;
    let categoryProducts = [];
    if (sub) {
      const subCategory = catalog[category].find((item) => {
        return item[sub];
      });
      categoryProducts = subCategory[sub];
    } else {
      catalog[category].forEach((sub) => {
        Object.values(sub).forEach((item) => {
          item.forEach((product) => {
            categoryProducts.push(product);
          })
        })
      });
    }
    this.setState({products: categoryProducts})
  }

  componentDidMount() {
    if (this.props.catalog) {
      this.filterCatalogItemsByCategory();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const catalogUploaded = this.props.catalog && !prevProps.catalog;
    const anotherDynamicRoute = prevProps.location.pathname !== this.props.location.pathname
    if (catalogUploaded || anotherDynamicRoute) {
      this.filterCatalogItemsByCategory();
    }
  }

  render() {
    return (
      <div className={styles.Catalog}>
        <TitleSection url={this.props.match.url}/>
        <div className="container">
          {
            this.state.products.length > 0
              ?  <Products products={this.state.products}/>
              : <Loader/>
          }

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.products.products
  }
}

export default connect(mapStateToProps)(Catalog)
