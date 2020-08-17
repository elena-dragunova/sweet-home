import React from 'react'
import styles from './Overlay.module.css'

const Overlay = props => <div className={styles.Overlay} onClick={props.onClick}/>;

export default Overlay