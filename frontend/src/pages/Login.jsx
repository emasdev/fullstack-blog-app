import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='vertical-center'>
        <h1 className='text-center'>Iniciar sesión</h1>
        <div className="row mt-3">

          <form>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">Usuario</label>
              <input type="email" className="form-control" id="user" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="d-flex justify-content-center my-4">
              <button type="submit" className="btn btn-success justify-center">Iniciar sesión</button>
            </div>
          </form>
          <div className="mt-3">
            <p className='text-center'>¿Aun no tienes cuenta?<Link to="/registro"> Registrate</Link></p>
          </div>


        </div>

      </div>
    </>
  )
}

export default Login