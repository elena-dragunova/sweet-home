import React, {Component} from 'react'
import styles from './Layout.module.css'
import Drawer from '../../components/UI/Drawer/Drawer'

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
        <header>
          <h1>Header</h1>
          <button onClick={this.toggleCartHandler}>Toggle</button>
        </header>

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