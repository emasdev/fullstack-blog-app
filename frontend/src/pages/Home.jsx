import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'






const Home = () => {

  const posts = [{
    id: 1,
    titulo: "Titulo",
    autor: "Nombre de autor",
    fecha: "04/06/2024",
    contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  },
  {
    id: 2,
    titulo: "Titulo 2",
    autor: "Nombre de autor 2",
    fecha: "04/06/2024",
    contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  },
  {
    id: 3,
    titulo: "Titulo 3",
    autor: "Nombre de autor 3",
    fecha: "04/06/2024",
    contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  },
  {
    id: 4,
    titulo: "Titulo 4",
    autor: "Nombre de autor 4",
    fecha: "04/06/2024",
    contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  }
  ]

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <>


      <SearchBar />
      <div className='row'>
        {posts.map((post => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-3 mt-5 post" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <Link className="link" to={`/post/${post.id}`}><h5 className='display-8'>{post.titulo}</h5></Link>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{post.fecha}</h6>
                  <p>{post.contenido}</p>
                  <hr />
                  <p className='text-end'><small>{post.autor}</small></p>
                  <div className="d-flex justify-content-end">
                    <a href="#" className="card-link text-end">Leer más</a>
                  </div>

                </div>
              </div>





            </div>
          )
        }))}
      </div>
    </>
  )
}

export default Home