import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export default function Login({ saveUserData }) {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const baseUrl = 'https://ecommerce.routemisr.com'

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('email is required')
      .email('enter a valid email'),
    password: Yup.string().required('password is required'),
  })
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: submitForm,
  })

  async function submitForm(val) {
    let { data } = await axios
      .post(`${baseUrl}/api/v1/auth/signin`, val)
      .catch((err) => {
        setError(err.response.data.message)
      })
    if (data.message === 'success') {
      localStorage.setItem('userToken', data.token)
      saveUserData(data.user)
      navigate('/')
    }
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center p-4">Login</h2>
        {error === '' ? '' : <div className="alert alert-danger">{error}</div>}
        <form onSubmit={loginForm.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email{' '}
            </label>
            <input
              type="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              onBlur={loginForm.handleBlur}
              className="form-control"
              id="email"
              name="email"
            />
            {loginForm.touched.email ? (
              <p className="text-danger">{loginForm.errors.email}</p>
            ) : (
              ''
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              onBlur={loginForm.handleBlur}
              className="form-control"
              id="password"
              name="password"
            />
            {loginForm.touched.password ? (
              <p className="text-danger">{loginForm.errors.password}</p>
            ) : (
              ''
            )}
          </div>
          <div className="d-flex justify-content-between">
            <Link to="/forgetPassword">forget your password?</Link>
            <button
              className="btn bg-main text-white ms-auto d-block"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
