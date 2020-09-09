import React, {Component} from 'react'
import styles from './Input.module.css'

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || "",
    };
  }

  changeValue(event) {
    const value = event.target.value;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.Input}>
        <input
          id={this.props.name}
          type="text"
          value={value}
          placeholder={this.props.placeholder}
          name={this.props.name}
          ref={this.props.inputRef}
          onChange={this.changeValue.bind(this)}
        />
      </div>
    );
  }
}

export default Input
