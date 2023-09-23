import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default function Products() {
  const baseUrl = 'https://ecommerce.routemisr.com'
  let [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])
  async function getAllProducts() {
    let { data } = await axios.get(`${baseUrl}/api/v1/products`)
    setProducts(data.data)
    console.log(data.data)
  }

  return (
    <div>
      {products.length > 0 ? (
        <>
          <div className="container">
            <div className="row">
              <h4 className='p-3 '>Products</h4>
              {products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
