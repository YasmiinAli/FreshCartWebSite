import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function SliderDetails({ product }) {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        items={1}
        autoplay
        autoplayTimeout={2000}
      >
        {product.images.map((image, index) => (
          <div className="item" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </OwlCarousel>
    </>
  )
}
