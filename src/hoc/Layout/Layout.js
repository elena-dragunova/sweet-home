import React, {Component} from 'react'
import styles from './Layout.module.css'
import Drawer from '../../components/UI/Drawer/Drawer'
import Header from '../../components/main/Header/Header'

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
        <Header onCartClick={this.toggleCartHandler}></Header>

        <main className={styles.main}>
          {this.props.children}
        </main>

        <footer>
          <h1>Footer</h1>
        </footer>

        <Drawer isOpen={this.state.showCart}
                onClose={this.cartCloseHandler}/>
      </div>
    )
  }
}

export default Layout