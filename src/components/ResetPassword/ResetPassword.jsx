import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import VerificationInput from 'react-verification-input'

export default function ResetPassword() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const baseUrl = 'https://ecommerce.routemisr.com'
  let resetCodeForm = useFormik({
    initialValues: {
      resetCode: '',
    },
    onSubmit: submitForm,
  })
  async function submitForm(val) {
    setLoading(true)
    let { data } = await axios
      .post(`${baseUrl}/api/v1/auth/verifyResetCode`, val)
      .catch((err) => {
        setLoading(false)
        setError(err.response.data.message)
      })
    setLoading(false)
    console.log(data)
  }
  return (
    <>
      <div className="container  ">
        <h2 className=" mt-3 mb-3">Enter Code </h2>
        {error === '' ? '' : <p className="alert alert-danger">{error}</p>}
        <form onSubmit={resetCodeForm.handleSubmit}>
          <VerificationInput
            name="resetCode"
            onChange={resetCodeForm.handleChange}
            value={resetCodeForm.values.resetCode}
          />
          {loading ? (
            <button className="btn btn-success mt-3">
              <RotatingLines
                strokeColor="white"
                strokeWidth="4"
                animationDuration="0.75"
                width="25"
                visible={true}
              />
            </button>
          ) : (
            <button type="submit" className="btn btn-success mt-3 ">
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  )
}
