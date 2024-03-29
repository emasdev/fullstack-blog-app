import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const location = useLocation();
  const { currentUser, logout } = useContext(AuthContext);

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
            {currentUser?.user && (
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/crear" ? 'active' : ''}`} href="/crear">Crear nueva entrada</a>
              </li>
            )}

          </ul>
          <div className='d-flex align-items-center'>
            <span className='mr-3'>{currentUser?.user}</span>
            {currentUser ? (
              <button className='btn btn-light ml-md-4 text-muted' onClick={logout}>Cerrar sesión</button>

            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
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