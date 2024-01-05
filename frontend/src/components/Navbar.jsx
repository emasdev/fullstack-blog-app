import React from 'react'
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  console.log(location)

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <span className="navbar-brand">Blog</span>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} href="/">Lista de entradas</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === "/crear" ? 'active' : ''}`} href="/crear">Crear nueva entrada</a>
            </li>
          </ul>
          <div className='d-flex'>
            <button className='btn btn-light ml-md-4'>Cerrar sesión</button>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expandmd">
    //   <div className="container-fluid">
    //     <span className="navbar-brand mb-0 h1">Blog</span>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Lista de entradas</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/crear">Crear nueva entrada</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar