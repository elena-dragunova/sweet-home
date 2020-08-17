import React, {Component} from 'react'
import styles from './Drawer.module.css'
import Overlay from '../Overlay/Overlay'

class Drawer extends Component {
  render() {
    const classes = [
      styles.Drawer,
    ];

    if (!this.props.isOpen) {
      classes.push(styles.close);
    }

    return (
      <React.Fragment>
        <div className={classes.join(' ')}>
          Here will be Cart
        </div>
        { this.props.isOpen ? <Overlay onClick={this.props.onClose}/> : null }
      </React.Fragment>
    )
  }
}

export default Drawer

