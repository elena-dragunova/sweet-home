import React, {Component} from 'react'
import styles from './Dropdown.module.css'

class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  openList() {
    this.setState({isOpen: true})
  }

  closeList() {
    this.setState({isOpen: false})
  }

  render() {
    return (
      <div className={styles.Dropdown}
           onMouseEnter={() => this.openList()}
           onMouseLeave={() => this.closeList()}
      >
        <div className={styles.header}>
          <div className={styles.title}>{this.props.title}</div>
          {this.state.isOpen
            ? <i className="fas fa-chevron-up"></i>
            : <i className="fas fa-chevron-down"></i>
          }
        </div>
        {this.state.isOpen && <ul className={styles.list}>
          {this.props.items.map((item) => (
            <li className={styles.listItem} key={item.id} >{item.title}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default Dropdown