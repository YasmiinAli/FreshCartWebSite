import React from 'react'
import MainSlider from './../MainSlider/MainSlider'
import Products from '../Products/Products'
import CategorySlider from '../CategorySlider/CategorySlider'

export default function Home() {
  return (
    <>
      <div className="container mt-3">
        <MainSlider />
        <CategorySlider/>
        <Products />
      </div>
    </>
  )
}
