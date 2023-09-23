import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function CategorySlider() {
  const baseUrl = 'https://ecommerce.routemisr.com'
  let [categories, setCategories] = useState([])
  useEffect(() => {
    getAllCategories()
  }, [])

  async function getAllCategories() {
    let { data } = await axios.get(`${baseUrl}/api/v1/categories`)
    setCategories(data.data)
    console.log(data.data)
  }

  return (
    <div>
      <h4>Shop Popular Categories</h4>
      <OwlCarousel
        className="owl-theme"
        items={6}
        autoplay
        autoplayTimeout={2000}
        dots={false}
      >
        {categories.map((category, index) => (
          <div className="item" key={index}>
            <img src={category.image} alt="" className="w-100 smallImg" />
            <p>{category.name.split(' ').slice(0, 1).join(' ')}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  )
}
