import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import img1 from '../../assets/images/slider-image-1.jpeg'
import img2 from '../../assets/images/slider-image-2.jpeg'
import img3 from '../../assets/images/slider-image-3.jpeg'

export default function MainSlider() {
  return (
    <>
      <div className="row g-0">
        <div className="col-9">
          <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            autoplay
            autoplayTimeout={2000}
            dots={false}
          >
            <div class="item">
              <img src={img1} className="w-100 largeImg " alt="" />
            </div>
            <div class="item">
              <img src={img2} className="w-100 largeImg" alt="" />
            </div>
            <div class="item">
              <img src={img3} className="w-100 largeImg" alt="" />
            </div>
            <div class="item">
              <img src={img2} className="w-100 largeImg" alt="" />
            </div>
            <div class="item">
              <img src={img3} className="w-100 largeImg" alt="" />
            </div>
          </OwlCarousel>
        </div>
        <div className="col-3">
          <img src={img2} className="w-100 smallImg" alt="" />
          <img src={img3} className="w-100 smallImg" alt="" />
        </div>
      </div>
    </>
  )
}
