import React from 'react'

// Componente para la barra de navegación inicial
const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand text-uppercase">{brand}</a>
      </div>
    </nav>
  )
}

export default Navbar
