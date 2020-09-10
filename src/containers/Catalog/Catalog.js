import React, { Component } from 'react'
import styles from './Catalog.module.css'
import TitleSection from '../../components/UI/TitleSection/TitleSection'

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
        <TitleSection url={this.props.match.url}/>
        <h1>Catalog</h1>
      </div>
    )
  }
}

export default Catalog
