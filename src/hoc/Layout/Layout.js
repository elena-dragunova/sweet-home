import React, {Component} from 'react'
import styles from './Layout.module.css'
import Drawer from '../../components/UI/Drawer/Drawer'
import Header from '../../components/main/Header/Header'
import Footer from '../../components/main/Footer/Footer'

class Layout extends Component {
  state = {
    showCart: false,
  };

  toggleCartHandler = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };

  cartCloseHandler = () => {
    this.setState({
      showCart: false,
    });
  };

  render() {
    return (
      <div className={styles.Layout}>
        <Header onCartClick={this.toggleCartHandler} />

        <main className={styles.main}>
          {this.props.children}
        </main>

        <Footer />

        <Drawer isOpen={this.state.showCart}
                onClose={this.cartCloseHandler}/>
      </div>
    )
  }
}

export default Layout
