import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    user: "",
    password: "",
    cpassword: ""
  })

  const [error, setError] = useState()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (inputs.password !== inputs.cpassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    const data = {
      user: inputs.user,
      password: inputs.password,
    }

    try {
      const res = await axios.post("/api/auth/register", data)
      navigate("/login")
    } catch (error) {
      console.error(error)
      setError(error.response.data)
    }
  }
  //console.log(inputs)

  return (
    <div className='vertical-center'>
      <h1 className='text-center'>Crear nueva cuenta</h1>
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
            <input type="text" className="form-control" id="user" required onChange={handleChange} name="user" />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input type="password" autoComplete='false' className="form-control" id="contraseña" required onChange={handleChange} name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirmar contraseña</label>
            <input type="password" autoComplete='false' className="form-control" id="cpassword" required onChange={handleChange} name="cpassword" />
          </div>
          <div className="d-flex d-flex justify-content-center my-4">
            <button type="submit" onClick={handleSubmit} className="btn btn-success justify-center">Crear cuenta</button>
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