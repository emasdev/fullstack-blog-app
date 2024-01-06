import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const navigate = useNavigate()

  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    user: "",
    password: "",
  })

  const [error, setError] = useState()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const data = {
      user: inputs.user,
      password: inputs.password,
    }

    try {
      await login(data)
      navigate("/")
    } catch (error) {
      console.error(error)
      setError(error.response.data)
    }
  }
  return (
    <>
      <div className='vertical-center'>
        <h1 className='text-center'>Iniciar sesión</h1>
        <div className="row mt-3">

          <form>
            {error && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {error}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="user" className="form-label">Usuario</label>
              <input type="email" className="form-control" name="user" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" name="password" onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center my-4">
              <button type="submit" onClick={handleSubmit} className="btn btn-success justify-center">Iniciar sesión</button>
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