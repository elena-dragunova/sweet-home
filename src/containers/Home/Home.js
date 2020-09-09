import React from 'react'
import styles from './Home.module.css'
import HomeSlider from '../../components/Home/HomeSlider/HomeSlider'
import TrendingProducts from '../../components/Home/TrendingProducts/TrendingProducts'
import PromoSection from '../../components/Home/PromoSection/PromoSection'

export default () => (
  <div>
    <HomeSlider />
    <TrendingProducts />
    <PromoSection />
  </div>
)
