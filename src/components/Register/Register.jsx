import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { RotatingLines } from 'react-loader-spinner'

export default function Register() {
  const baseUrl = 'https://ecommerce.routemisr.com'
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const validatonSchema = Yup.object({
    email: Yup.string()
      .email('enter a valid email')
      .required('Email is required'),
    name: Yup.string()
      .required('Name is required')
      .min(3, 'min length 3 char')
      .max(20, 'max length 20 char'),
    phone: Yup.string()
      .required('Email is required')
      .matches(/^01[0125][0-9]{8}$/, 'Enter valid number'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password is too short - should be 4 chars minimum'),
    rePassword: Yup.string()
      .required('rePassword is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })
  const registerForm = useFormik({
    initialValues: {
      name: '',
      phone: '',
      password: '',
      rePassword: '',
      email: '',
    },
    validationSchema: validatonSchema,
    onSubmit: submitForm,
  })
  async function submitForm(values) {
    setLoading(true)
    let { data } = await axios
      .post(`${baseUrl}/api/v1/auth/signup`, values)
      .catch((err) => {
        setLoading(false)
        setError(err.response.data.message)
      })
    if (data.message === 'success') {
      setLoading(false)
      navigate('/login')
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="text-center p-4">Register Now</h2>
        {error === '' ? '' : <div className="alert alert-danger">{error}</div>}
        <form onSubmit={registerForm.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name{' '}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onBlur={registerForm.handleBlur}
              onChange={registerForm.handleChange}
              value={registerForm.values.name}
            />
            {registerForm.touched.name ? (
              <p className="text-danger">{registerForm.errors.name}</p>
            ) : (
              ''
            )}{' '}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email{' '}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onBlur={registerForm.handleBlur}
              onChange={registerForm.handleChange}
              value={registerForm.values.email}
            />
            {registerForm.touched.email ? (
              <p className="text-danger">{registerForm.errors.email}</p>
            ) : (
              ''
            )}{' '}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone{' '}
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              onBlur={registerForm.handleBlur}
              onChange={registerForm.handleChange}
              value={registerForm.values.phone}
            />
            {registerForm.touched.phone ? (
              <p className="text-danger">{registerForm.errors.phone}</p>
            ) : (
              ''
            )}{' '}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onBlur={registerForm.handleBlur}
              onChange={registerForm.handleChange}
              value={registerForm.values.password}
            />
            {registerForm.touched.password ? (
              <p className="text-danger">{registerForm.errors.password}</p>
            ) : (
              ''
            )}{' '}
          </div>
          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">
              rePassword
            </label>
            <input
              type="password"
              className="form-control"
              id="rePassword"
              name="rePassword"
              onBlur={registerForm.handleBlur}
              onChange={registerForm.handleChange}
              value={registerForm.values.rePassword}
            />
            {registerForm.touched.rePassword ? (
              <p className="text-danger">{registerForm.errors.rePassword}</p>
            ) : (
              ''
            )}
          </div>

          {loading ? (
            <button className="btn bg-main text-white ms-auto d-block">
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
              type="submit"
              disabled={!(registerForm.dirty && registerForm.isValid)}
              className="btn bg-main text-white ms-auto d-block"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  )
}
