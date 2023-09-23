import React from 'react'
import notFoundimg from '../../assets/images/error.svg'
export default function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={notFoundimg} alt="Error Not Found" className="w-50 " />
      </div>
    </>
  )
}
