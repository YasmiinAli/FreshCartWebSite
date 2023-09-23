import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout({ logOut, userData }) {
  return (
    <div>
      <Header logOut={logOut} userData={userData} />
      <Outlet />
      <Footer />
    </div>
  )
}
