import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product }) {
  let nav = useNavigate()
  const handleClick = () => {
    nav(`/ProductDetails/${product.id}`, { state: product })
  }

  return (
    <>
      <>
        <div className="col-2 mb-3 product cursor-pointer p-2">
          <img src={product.imageCover} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-main">{product.category.name}</p>
            <p className="card-text">
              {product.title.split(' ').slice(0, 2).join(' ')}
            </p>
            <div className="d-flex justify-content-between">
              <p className="card-text">{product.price} EGP</p>
              <div>
                <i className="fa-solid fa-star rating-color"></i>
                <span>{product.ratingsAverage}</span>
              </div>
            </div>
            <button
              className="btn bg-main text-white w-100"
              onClick={handleClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </>
    </>
  )
}
