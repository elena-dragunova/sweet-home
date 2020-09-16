import React, { Component } from 'react'
import styles from './Product.module.css'
import {connect} from 'react-redux'
import Loader from '../../components/UI/Loader/Loader';
import { Rating } from '@material-ui/lab';
import QuantityInput from '../../components/UI/QuantityInput/QuantityInput';

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
    console.log(this.state)
  }

  setCurrentProduct() {
    const currentProduct = this.props.products.find((product) => {
      return product.id.toString() === this.props.match.params.id;
    });
    this.setState({product: currentProduct})
  }

  handleQuantityChange(quantity) {
    this.setState((state) => {
      return {productQuantity: quantity}
    })
  };

  render() {
    return (
      <div>
        {
          this.state.product
          ? <div className={styles.Product}>
              <div className="container">
                <div className={styles.ProductMain}>
                  <div className={styles.ProductImages}>
                    {
                      this.state.product.options.map((option, index) => {
                        return (
                          <div key={index}
                               className={styles.ImageWrapper}>
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
                              return (<div key={index} className={styles.ActiveColor} style={{background: option.color}}/>)
                            } return (<div key={index} className={styles.Color} style={{background: option.color}}/>)
                          }
                        })
                      }
                    </div>
                    <p className={styles.ProductPrice}>${this.state.product.price.toFixed(2)}</p>
                    <QuantityInput quantity={this.state.productQuantity}
                                   minVal={1}
                                   maxVal={this.state.product.options[this.state.selectedOption].quantity}
                                   onChange={this.handleQuantityChange.bind(this)}/>
                  </div>
                </div>

                <div className={styles.ProductDescriptions}>
                  descriptions
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

export default connect(mapStateToProps)(Product)
