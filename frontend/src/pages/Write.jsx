import React from 'react'

const Write = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card mt-5">

            <div className="card-body">
              <h5 className="card-title">Crear nueva entrada</h5>

              <form>
                <div className="form-group mt-4">
                  <label htmlFor="exampleFormControlTextarea1">Escribe el texto</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Crear entrada</button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Write