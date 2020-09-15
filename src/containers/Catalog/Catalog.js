import React, { Component } from 'react'
import styles from './Catalog.module.css'
import { connect } from 'react-redux'
import TitleSection from '../../components/UI/TitleSection/TitleSection'
import Products from '../../components/Catalog/Products/Products'
import Loader from '../../components/UI/Loader/Loader';
import CatalogFilter from '../../components/Catalog/CatalogFilter/CatalogFilter';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      categories: [],
      filteredProducts: null,
    }
  }

  filterCatalogItemsByCategory() {
    const category = this.props.match.params.type;
    const sub = this.props.match.params.sub;

    const catalog = this.props.catalog;
    let categoryProducts = [];

    if (sub) {
      this.setState({categories: []});
      categoryProducts = catalog.filter((item) => {
        return item.subcategory === sub;
      });
    } else if (category) {
      const categories = [];
      catalog.forEach((item) => {
        if (item.category === category) {
          categories.push(item.subcategory);
        }
      });
      const categoriesSet = [...new Set(categories)];
      categoryProducts = catalog.filter((item) => {
        return item.category === category;
      });
      this.setState({categories: categoriesSet});
    } else {
      const categories = [];
      catalog.forEach((item) => {
        categories.push(item.category);
      });
      const categoriesSet = [...new Set(categories)];
      this.setState({categories: categoriesSet});
      categoryProducts = catalog;

    }
    this.setState({products: categoryProducts});
    this.setState({filteredProducts: categoryProducts});
  }

  componentDidMount() {
    if (this.props.catalog) {
      this.filterCatalogItemsByCategory();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const catalogUploaded = this.props.catalog && !prevProps.catalog;
    const anotherDynamicRoute = prevProps.location.pathname !== this.props.location.pathname;
    if (catalogUploaded || anotherDynamicRoute) {
      this.filterCatalogItemsByCategory();
    }
  }

  onChangeHandler(e) {
    const category = e.target.name;
    const isChecked = e.target.checked;
    this.filterProductsByCategory(category, isChecked);
  };

  filterProductsByCategory(category, isChecked) {
    const products = this.state.products;
    console.log(products)
    const isSub = !!this.props.match.params.type;
    if (isSub && isChecked) {
      const currentCategory = this.props.match.params.type;

    }
  }

  render() {
    return (
      <div className={styles.Catalog}>
        <TitleSection url={this.props.match.url}/>
        <div className="container">
          <div className={styles.CatalogContainer}>
            <div className={styles.CatalogFilter}>
              <CatalogFilter categories={this.state.categories} onChange={this.onChangeHandler.bind(this)}/>
            </div>
            <div className={styles.CatalogMain}>
              {
                this.state.filteredProducts
                  ?  <Products products={this.state.filteredProducts}/>
                  : <Loader/>
              }
            </div>

          </div>
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
