import React, { Component } from 'react'
import styles from './Product.module.css'
import { connect } from 'react-redux'
import Loader from '../../components/UI/Loader/Loader';
import { Rating } from '@material-ui/lab';
import QuantityInput from '../../components/UI/QuantityInput/QuantityInput';
import Button from '../../components/UI/Button/Button';
import ProductBreadcrumbs from '../../components/UI/ProductBreadcrumbs/ProductBreadcrumbs';
import { addProductToCart, toggleCart } from '../../store/actions/cart';

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null,
      selectedOption: 0,
      productQuantity: 1,
    }
  }

  componentDidMount() {
    if (this.props.products) {
      this.setCurrentProduct();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const catalogUploaded = this.props.products && !prevProps.products;
    const anotherDynamicRoute = prevProps.location.pathname !== this.props.location.pathname;
    if (catalogUploaded || anotherDynamicRoute) {
      this.setCurrentProduct();
    }
  }

  setCurrentProduct() {
    const currentProduct = this.props.products.find((product) => {
      return product.id.toString() === this.props.match.params.id;
    });
    this.setState({product: currentProduct})
  }

  handleQuantityChange(quantity) {
    this.setState(() => {
      return {productQuantity: quantity}
    })
  };

  changeSelectedOption(optionIndex) {
    this.setState(() => {
      return {selectedOption: optionIndex}
    })
  }

  addToCartHandler() {
    const selectedOption = this.state.selectedOption;
    const product = {
      id: this.state.product.id,
      name: this.state.product.name,
      price: this.state.product.price,
      vendor: this.state.product.vendor,
      image: this.state.product.options[selectedOption].image,
      color: this.state.product.options[selectedOption].color,
      quantity: this.state.productQuantity,
      maxVal: this.state.product.options[selectedOption].quantity,
    };
    this.props.addProductToCart(product);
    this.props.toggleCart();
  }

  render() {
    return (
      <div>
        {
          this.state.product
          ? <div className={styles.Product}>
              <ProductBreadcrumbs cat={this.state.product.category}
                                  sub={this.state.product.subcategory}
                                  name={this.state.product.name}/>
              <div className="container">
                <div className={styles.ProductMain}>
                  <div className={styles.ProductImages}>
                    {
                      this.state.product.options.map((option, index) => {
                        return (
                          <div key={index}
                               className={styles.ImageWrapper}
                               onClick={this.changeSelectedOption.bind(this, index)}>
                            <img src={option.image} alt=""/>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className={styles.ProductMainImage}>
                    <div className={styles.ImageWrapper}>
                      <img src={this.state.product.options[this.state.selectedOption].image} alt=""/>
                    </div>
                  </div>
                  <div className={styles.ProductData}>
                    <h2>{this.state.product.name}</h2>
                    <Rating value={this.state.product.rating}
                            className={styles.Rating}
                            precision={0.5}
                            readOnly
                            size="small"/>
                    <p className={styles.ProductDescription}>{this.state.product.description}</p>
                    <h4>Color:</h4>
                    <div className={styles.ColorOptions}>
                      {
                        this.state.product.options.map((option, index) => {
                          {
                            if (index === this.state.selectedOption) {
                              return (
                                <div key={index}
                                     className={styles.ActiveColor}
                                     style={{background: option.color}}/>
                                )
                            } return (
                              <div key={index}
                                   className={styles.Color}
                                   style={{background: option.color}}
                                   onClick={this.changeSelectedOption.bind(this, index)}/>
                              )
                          }
                        })
                      }
                    </div>
                    <p className={styles.ProductPrice}>$ {this.state.product.price.toFixed(2)}</p>

                    <div className={styles.ProductActions}>
                      <QuantityInput quantity={this.state.productQuantity}
                                     minVal={1}
                                     maxVal={this.state.product.options[this.state.selectedOption].quantity}
                                     onChange={this.handleQuantityChange.bind(this)}/>
                      <Button buttonStyle="AccentButton" onClick={this.addToCartHandler.bind(this)}>
                        <i className="fas fa-shopping-cart"></i>
                        Add To Cart
                      </Button>
                    </div>

                    <div className={styles.ProductFeatures}>
                      <div className={styles.ProductFeature}>
                        <h5>Quantity:</h5>
                        <p>{this.state.product.options[this.state.selectedOption].quantity}</p>
                      </div>
                      <div className={styles.ProductFeature}>
                        <h5>Vendor:</h5>
                        <p>{this.state.product.vendor}</p>
                      </div>
                      <div className={styles.ProductFeature}>
                        <h5>Dimensions:</h5>
                        {
                          this.state.product.dimentions
                          ? <p>
                              Width: {this.state.product.dimentions.width},
                              height: {this.state.product.dimentions.height},
                              depth: {this.state.product.dimentions.depth}
                          </p>
                          : <p>N/A</p>
                        }
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          : <Loader/>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    toggleCart: () => dispatch(toggleCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
