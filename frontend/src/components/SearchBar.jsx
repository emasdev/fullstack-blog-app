import React, { useState } from 'react'

const SearchBar = () => {

  const [filter, setFilter] = useState("Titulo")

  const onFilterChange = e => {
    setFilter(e.target.value)
  }

  return (
    <form role="search">
      <div className="row mt-5">
        <div className='col-sm-12 col-md-6'>
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
        </div>
        <div className="col-sm-12 col-md-4 mt-3 mt-md-0">
          <div className="d-flex flex-column">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="filterType" id="type1" value="Titulo" checked={filter === "Titulo"} onChange={onFilterChange} />
              <label className="form-check-label" htmlFor="type1">
                Titulo
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="filterType" id="type2" value="Autor" checked={filter === "Autor"} onChange={onFilterChange} />
              <label className="form-check-label" htmlFor="type2">
                Autor
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="filterType" id="type3" value="Contenido" checked={filter === "Contenido"} onChange={onFilterChange} />
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
            <button className="btn btn-outline-primary" type="submit">Buscar</button>
          </div>

        </div>

      </div>
    </form>
  )
}

export default SearchBar