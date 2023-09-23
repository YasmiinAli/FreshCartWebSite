import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const baseUrl = 'https://ecommerce.routemisr.com'
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('email is required')
      .email('enter a valid email'),
  })
  const forgetPasswordForm = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: submitForm,
  })
  async function submitForm(values) {
    setIsLoading(true)
    let { data } = await axios
      .post(`${baseUrl}/api/v1/auth/forgotPasswords`, values)
      .catch((err) => {
        setIsLoading(false)
        console.log(err.response.data.message)
      })
    if (data.statusMsg === 'success') {
      setIsLoading(false)
      navigate('/resetPassword')
    }
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center p-5">Forget Password? </h2>
        <form onSubmit={forgetPasswordForm.handleSubmit}>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control mt-3"
            onChange={forgetPasswordForm.handleChange}
            value={forgetPasswordForm.values.email}
            onBlur={forgetPasswordForm.handleBlur}
          />
          {forgetPasswordForm.touched.email ? (
            <p className="text-danger">{forgetPasswordForm.errors.email}</p>
          ) : (
            ''
          )}
          {isLoading ? (
            <button className="btn btn-success ms-auto d-block">
              <RotatingLines
                strokeColor="white"
                strokeWidth="4"
                animationDuration="0.75"
                width="25"
                visible={true}
              />
            </button>
          ) : (
            <button
              disabled={
                !(forgetPasswordForm.dirty && forgetPasswordForm.isValid)
              }
              className="btn btn-success mt-3 ms-auto d-block"
            >
              Send Reset Code
            </button>
          )}
        </form>
      </div>
    </>
  )
}
