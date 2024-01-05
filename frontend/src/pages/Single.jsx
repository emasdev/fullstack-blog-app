import React from 'react'

const Single = () => {

  const post = {
    id: 1,
    titulo: "Titulo",
    autor: "Nombre de autor",
    fecha: "04/06/2024",
    contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="card mt-5">

            <div className="card-body">
              <h5 className="card-title">{post.titulo}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{post.fecha}</h6>
              <p className="card-text mt-4">{post.contenido}</p>
              <hr />
              <p className='text-end'><small>{post.autor}</small></p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Single