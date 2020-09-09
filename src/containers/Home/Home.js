import React from 'react'
import styles from './Home.module.css'
import HomeSlider from '../../components/Home/HomeSlider/HomeSlider'
import TrendingProducts from '../../components/Home/TrendingProducts/TrendingProducts'
import PromoSection from '../../components/Home/PromoSection/PromoSection'
import PromoCollection from '../../components/Home/PromoCollection/PromoCollection'
import BestSellers from '../../components/Home/BestSellers/BestSellers'

export default () => (
  <div>
    <HomeSlider />
    <TrendingProducts />
    <PromoSection />
    <PromoCollection />
    <BestSellers />
  </div>
)
