import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Categories() {
    const baseUrl = 'https://ecommerce.routemisr.com'
    let [categories,setCategories] = useState([])

    async function getAllCategories() {
      let {data} = await axios.get(`${baseUrl}/api/v1/categories`)
      setCategories(data.data)
    }
    useEffect(()=>{
      getAllCategories()
    },[])
  return (
    <div className='container'>
      <div className="row p-4">
      {categories?.map((category, index)=>
      <>
      <div className="col-3  mb-5" key={index}>
  <img className="card-img-top w-100 categoryImg" src={category.image} alt="category" />
  <div className="card-body">
    <h5 className="card-title text-main">{category.name}</h5>
  </div>
      </div>
      </>)
      }
      </div>
      </div>
  )
}
