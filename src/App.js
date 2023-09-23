import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import { useEffect, useState } from 'react'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import ResetPassword from './components/ResetPassword/ResetPassword'
import jwtDecode from 'jwt-decode'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Categories from './components/Categories/Categories'

function App() {
  let [userData, setUserData] = useState(null)
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      let token = localStorage.getItem('userToken')
      let data = jwtDecode(token)
      saveUserData(data)
    }
  }, [])

  function saveUserData(data) {
    setUserData(data)
  }
  function ProtectedRoute(props) {
    if (localStorage.getItem('userToken')) {
      return props.children
    } else {
      return <Login saveUserData={saveUserData} />
    }
  }
  function logOut() {
    saveUserData(null)
    localStorage.removeItem('userToken')

    return <Navigate to="/login" />
  }

  const routes = createBrowserRouter([
    {
      path: '',
      element: <Layout logOut={logOut} userData={userData} />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              {' '}
              <Home userData={userData} />{' '}
            </ProtectedRoute>
          ),
        },
        {
          path: 'home',
          element: (
            <ProtectedRoute>
              {' '}
              <Home userData={userData} />{' '}
            </ProtectedRoute>
          ),
        },
        {
          path: 'product',
          element: (
            <ProtectedRoute>
              {' '}
              <Products userData={userData} />{' '}
            </ProtectedRoute>
          ),
        },
        {
          path: 'category',
          element: (
            <ProtectedRoute>
              {' '}
              <Categories userData={userData} />{' '}
            </ProtectedRoute>
          ),
        },
        {
          path: 'ProductDetails/:id',
          element: (
            <ProtectedRoute>
              {' '}
              <ProductDetails userData={userData} />{' '}
            </ProtectedRoute>
          ),
        },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login saveUserData={saveUserData} /> },
        { path: 'forgetPassword', element: <ForgetPassword /> },
        { path: 'resetPassword', element: <ResetPassword /> },
        { path: '', element: <Layout /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
