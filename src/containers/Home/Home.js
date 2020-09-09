import React from 'react'
import HomeSlider from '../../components/Home/HomeSlider/HomeSlider'
import TrendingProducts from '../../components/Home/TrendingProducts/TrendingProducts'
import PromoSection from '../../components/Home/PromoSection/PromoSection'
import PromoCollection from '../../components/Home/PromoCollection/PromoCollection'
import BestSellers from '../../components/Home/BestSellers/BestSellers'
import SubscribeSection from '../../components/Home/SubscribeSection/SubscribeSection'

export default () => (
  <div>
    <HomeSlider />
    <TrendingProducts />
    <PromoSection />
    <PromoCollection />
    <BestSellers />
    <SubscribeSection/>
  </div>
)
