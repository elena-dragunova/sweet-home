import React, { Component } from 'react'
import styles from './Catalog.module.css'
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs'

class Catalog extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Breadcrumbs url={this.props.match.url}/>
        <h1>Catalog</h1>
      </div>
    )
  }
}

export default Catalog
