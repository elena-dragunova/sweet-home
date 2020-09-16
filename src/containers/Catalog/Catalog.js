import React, {Component} from 'react'
import styles from './Catalog.module.css'
import {connect} from 'react-redux'
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
      colors: [],
      selectedCategories: [],
      selectedColors: [],
      selectedPrices: [],
      filteredProductsByCategory: [],
      filteredProductsByColor: [],
      filteredProductsByPrice: [],
      filtered: [],
      priceRanges: [
        [0, 20],
        [20, 50],
        [50, 100],
        [100, 1000]
      ],
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
    this.setState({filteredProductsByCategory: []});
    this.setState({filteredProductsByColor: []});
    this.setState({filteredProductsByPrice: []});
    this.setState({filtered: categoryProducts});

    this.setPossibleColors(categoryProducts);
  }

  setPossibleColors(catalog) {
    const colors = [];
    catalog.forEach((product) => {
      product.options.forEach((option) => {
        colors.push(option.color);
      });
    });
    const uniqueColors = [...new Set(colors)];
    this.setState({colors: uniqueColors});
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

  onCategoriesChangeHandler(e) {
    const category = e.target.name;
    const isChecked = e.target.checked;
    this.filterProductsByCategory(category, isChecked);
    this.filterProducts();
  };

  filterProductsByCategory(category, isChecked) {
    const selectedCategories = this.state.selectedCategories;
    const products = this.state.products;
    const isSub = !!this.props.match.params.type;
    if (isSub && isChecked) {
      if (!selectedCategories.includes(category)) {
        selectedCategories.push(category);
      }
      const currentFilter = products.filter((product) => {
        return product.subcategory === category;
      });
      const filtered = this.state.filteredProductsByCategory;
      currentFilter.forEach((item) => {
        filtered.push(item);
      });
      this.setState({filteredProductsByCategory: filtered})
    }

    if (!isSub && isChecked) {
      if (!selectedCategories.includes(category)) {
        selectedCategories.push(category);
      }
      const currentFilter = products.filter((product) => {
        return product.category === category;
      });
      const filtered = this.state.filteredProductsByCategory;
      currentFilter.forEach((item) => {
        filtered.push(item);
      });
      this.setState({filteredProductsByCategory: filtered})
    }

    if (isSub && !isChecked) {
      const unselectedInd = selectedCategories.findIndex(item => item === category);
      selectedCategories.splice(unselectedInd, 1);

      const currentFiltered = this.state.filteredProductsByCategory;
      const filtered = currentFiltered.filter((item) => {
        return item.subcategory !== category;
      });
      this.setState({filteredProductsByCategory: filtered})
    }

    if (!isSub && !isChecked) {
      const unselectedInd = selectedCategories.findIndex(item => item === category);
      selectedCategories.splice(unselectedInd, 1);

      const currentFiltered = this.state.filteredProductsByCategory;
      const filtered = currentFiltered.filter((item) => {
        return item.category !== category;
      });
      this.setState({filteredProductsByCategory: filtered});
      this.setState({selectedCategories});
    }
  }

  onColorsChangeHandler(e) {
    const color = e.target.name;
    const isChecked = e.target.checked;
    this.filterProductsByColor(color, isChecked);
    this.filterProducts();
  }

  filterProductsByColor(color, isChecked) {
    const products = this.state.products;
    const colorFilters = [];
    const selectedColors = this.state.selectedColors;

    if (isChecked) {
      if (!selectedColors.includes(color)) {
        selectedColors.push(color);
      }

      products.forEach((product) => {
        if (product.options.some((option) => {
          return option.color === color;
        })) {
          colorFilters.push(product);
        }
      });
      const filtered = this.state.filteredProductsByColor;
      colorFilters.forEach((item) => {
        if (!filtered.find((product) => product.id === item.id)) {
          filtered.push(item);
        }
      });
      this.setState({filteredProductsByColor: filtered})
    } else {
      const currentColorInd = selectedColors.findIndex(item => item === color);
      selectedColors.splice(currentColorInd, 1);

      let currentFiltered = this.state.filteredProductsByColor;
      let filtered = currentFiltered.filter((item) => {
        const hasNoColorsUnselected = item.options.every((opt) => {
          return opt.color !== color;
        });
        const hasAnotherSelectedColor = item.options.some((opt) => {
          return selectedColors.includes(opt.color);
        });

        return hasNoColorsUnselected || hasAnotherSelectedColor;
      });

      this.setState({selectedColors});
      this.setState({filteredProductsByColor: filtered});
    }
  }

  onPricesChangeHandler(e) {
    const priceIndex = e.target.id;
    const isChecked = e.target.checked;
    this.filterProductsByPrice(priceIndex, isChecked);
    this.filterProducts();
  }

  filterProductsByPrice(priceIndex, isChecked) {
    const selectedPrices = this.state.selectedPrices;
    const products = this.state.products;
    let filteredByPrice = this.state.filteredProductsByPrice;
    const prices = this.state.priceRanges[priceIndex];

    if (isChecked) {
      if (!selectedPrices.includes(priceIndex)) {
        selectedPrices.push(priceIndex);
      }

      const filtered = products.filter((product) => {
        return product.price >= prices[0] && product.price <= prices[1];
      });
      filtered.forEach(item => filteredByPrice.push(item));
    } else {
      const unselectedInd = selectedPrices.findIndex(item => item === priceIndex);
      selectedPrices.splice(unselectedInd, 1);

      filteredByPrice = filteredByPrice.filter((product) => {
        return product.price <= prices[0] || product.price >= prices[1];
      });
    }

    this.setState({filteredProductsByPrice: filteredByPrice});
    this.setState({selectedPrices});
  }

  filterProducts() {
    this.setState((state) => {
      const products = state.products;
      let filteredByCat;
      let filteredByColor;
      let filteredByPrice;

      if (state.selectedCategories.length > 0) {
        filteredByCat = state.filteredProductsByCategory;
      } else {
        filteredByCat = products;
      }

      if (state.selectedColors.length > 0) {
        filteredByColor = state.filteredProductsByColor;
      } else {
        filteredByColor = products;
      }

      if (state.selectedPrices.length > 0) {
        filteredByPrice = state.filteredProductsByPrice;
      } else {
        filteredByPrice = products;
      }

      const filtered = products.filter((product) => {
        return filteredByCat.includes(product) &&
          filteredByColor.includes(product) &&
          filteredByPrice.includes(product);
      });
      return {filtered};
    })

  }

  render() {
    return (
      <div className={styles.Catalog}>
        <TitleSection url={this.props.match.url}/>
        <div className="container">
          <div className={styles.CatalogContainer}>
            <div className={styles.CatalogFilter}>
              <CatalogFilter categories={this.state.categories}
                             colors={this.state.colors}
                             priceRanges={this.state.priceRanges}
                             onCategoriesChange={this.onCategoriesChangeHandler.bind(this)}
                             onColorsChange={this.onColorsChangeHandler.bind(this)}
                             onPricesChange={this.onPricesChangeHandler.bind(this)}/>
            </div>
            <div className={styles.CatalogMain}>
              {
                this.state.filtered.length > 0
                  ?  <Products products={this.state.filtered}/>
                  : this.state.products.length > 0
                    ? <p className={styles.CatalogWarning}>Nothing found matching you parameters.</p>
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
