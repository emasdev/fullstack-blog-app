import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='vertical-center'>
      <h1 className='text-center'>Crear nueva cuenta</h1>
      <div className="row mt-3">

        <form>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input type="email" className="form-control" id="usuario" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contraseña" required />
          </div>
          <div className="mb-3">
            <label htmlFor="c-password" className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" id="c-password" required />
          </div>
          <div className="d-flex d-flex justify-content-center my-4">
            <button type="submit" className="btn btn-success justify-center">Crear cuenta</button>
          </div>
        </form>

        <div className="mt-3">
          <p className='text-center'>¿Ya tienes una cuenta hecha?<Link to="/login"> Inicia sesión</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Register