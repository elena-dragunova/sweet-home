import React, {Component} from 'react'
import styles from './Layout.module.css'
import Drawer from '../../components/UI/Drawer/Drawer'
import Header from '../../components/main/Header/Header'
import Footer from '../../components/main/Footer/Footer'
import { connect } from 'react-redux'
import { toggleCart } from '../../store/actions/cart';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Layout}>
        <Header onCartClick={this.props.toggleCart} />

        <main className={styles.main}>
          {this.props.children}
        </main>

        <Footer />

        <Drawer isOpen={this.props.showCart}
                onClose={this.props.toggleCart}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showCart: state.cart.open,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCart: () => dispatch(toggleCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
