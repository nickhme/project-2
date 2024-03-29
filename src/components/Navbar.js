// ? Import Link component
import { Link } from "react-router-dom"

import React from "react"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/countries" className="navbar-item">
                All Countries
              </Link>
              <Link to="/country/france" className="navbar-item">
                My Country
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
