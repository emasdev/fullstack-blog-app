import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchBar = ({ handleFilter }) => {

  const [inputs, setInputs] = useState({
    search: "",
    filter: "Titulo"
  });

  const [error, setError] = useState()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (inputs.search.length < 3) {
      setError("La busqueda debe contener al menos 3 caracteres")
    }

    const data = {
      search: inputs.search,
      filter: inputs.filter,
    }

    try {
      const res = await axios.post("/api/posts/search", data)
      handleFilter(res.data)
      // debugger
      // console.log(res)
      //navigate("/")
    } catch (error) {
      console.error(error)
      setError(error.response.data.code)
    }
  }

  // useEffect(() => {
  //   if (inputs.filter) {
  //     handleFilter(inputs.filter)
  //   }
  // }, [inputs.filter])


  return (
    <form role="search">
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <div className="row mt-5">
        <div className='col-sm-12 col-md-6'>
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" name='search' onChange={handleChange} />
        </div>
        <div className="col-sm-12 col-md-4 mt-3 mt-md-0">
          <div className="d-flex flex-column">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="filter" id="type1" value="Titulo" checked={inputs.filter === "Titulo"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="type1">
                Titulo
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="filter" id="type2" value="Autor" checked={inputs.filter === "Autor"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="type2">
                Autor
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="filter" id="type3" value="Contenido" checked={inputs.filter === "Contenido"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="type3">
                Contenido
              </label>
            </div>
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <div className="d-flex justify-content-center justify-content-md-end">
            <button className="btn btn-outline-primary" type="submit" onClick={handleSubmit}>Buscar</button>
          </div>

        </div>

      </div>
    </form>
  )
}

export default SearchBar