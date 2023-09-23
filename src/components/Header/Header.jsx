import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'

export default function Header({ logOut, userData }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData !== null ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="product">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="category">
                    Categories
                  </Link>
                </li>
              </ul>
            ) : (
              ''
            )}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData == null ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <span className="nav-link cursor-pointer" onClick={logOut}>
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
