import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import moment from "moment";

const Write = () => {



  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    titulo: "",
    contenido: "",
    fecha: "",
  });

  const [error, setError] = useState()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (inputs.titulo.length === 0 || inputs.contenido.length === 0) {
      setError("Falta contenido de la entrada")
      return
    }

    const data = {
      titulo: inputs.titulo,
      contenido: inputs.contenido,
      fecha: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    }

    try {
      const res = await axios.post("/api/posts/", data)
      navigate("/")
    } catch (error) {
      console.error(error)
      setError(error.response.data.code)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card mt-5">

            <div className="card-body">
              <h5 className="card-title">Crear nueva entrada</h5>

              <form>
                {error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                )}
                <div className="form-group mt-4">
                  <label htmlFor="titulo">Titulo</label>
                  <input type="text" className="form-control" id="titulo" required onChange={handleChange} name="titulo" />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="contenido">Escribe el texto</label>
                  <textarea className="form-control" id="contenido" rows="8" required onChange={handleChange} name="contenido" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>Crear entrada</button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Write