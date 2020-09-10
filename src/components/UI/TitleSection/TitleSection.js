import React from 'react'
import styles from './TitleSection.module.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { chooseCatalogImage } from '../../../utils';

export default props => {
  const titles = props.url.split('/');
  const currentTitle = titles[titles.length - 1];
  const image = chooseCatalogImage(currentTitle);

  return (
    <div className={styles.TitleSection}>
      <div className="container">
        <div className={styles.TitleContainer}>
          <div>
            <h1>{currentTitle}</h1>
            <Breadcrumbs url={props.url}/>
          </div>
          <div>
            <img src={image} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
