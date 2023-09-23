import React from 'react'
import { useLocation } from 'react-router-dom'
import SliderDetails from '../SliderDetails/SliderDetails'

export default function ProductDetails() {
  let location = useLocation()
  let product = location.state
  console.log(product)
  return (
    <>
      <div className="container">
        <h3 className="m-3 fw-bolder">Product Details</h3>
        <div className="row ">
          <div className="col-3">
            <SliderDetails product={product} />
          </div>
          <div className="col-9  m-auto">
            <h5 className="fw-bold">{product.title}</h5>
            <p>{product.description}</p>
            <p>{product.category.name}</p>
            <div className="d-flex justify-content-between">
              <p className="card-text">{product.price} EGP</p>
              <div>
                <i className="fa-solid fa-star rating-color"></i>
                <span>{product.ratingsAverage}</span>
              </div>
            </div>
            <button className="btn bg-main text-white w-100">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
