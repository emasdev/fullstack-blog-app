import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import axios from 'axios';
import { AuthContext } from '../context/authContext';






const Home = () => {

  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts`);
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, []);

  // const posts = [{
  //   id: 1,
  //   titulo: "Titulo",
  //   autor: "Nombre de autor",
  //   fecha: "04/06/2024",
  //   contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  // },
  // {
  //   id: 2,
  //   titulo: "Titulo 2",
  //   autor: "Nombre de autor 2",
  //   fecha: "04/06/2024",
  //   contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  // },
  // {
  //   id: 3,
  //   titulo: "Titulo 3",
  //   autor: "Nombre de autor 3",
  //   fecha: "04/06/2024",
  //   contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  // },
  // {
  //   id: 4,
  //   titulo: "Titulo 4",
  //   autor: "Nombre de autor 4",
  //   fecha: "04/06/2024",
  //   contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  // }
  // ]

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <>


      {posts.length > 0 && <SearchBar />}
      <div className='row'>
        {posts.length === 0 && (
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <div className="card mt-5">

                  <div className="card-body">
                    <h5 className="card-title">Bienvenido(a) {currentUser?.user}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    {!currentUser?.user && (
                      <>
                        <p className="card-text mt-4">Aun no hay entradas del blog </p>
                      </>
                    )}
                    {currentUser?.user && (
                      <>
                        <p className="card-text mt-4">Escribe la primer entrada del blog</p>
                        <Link className="link" to="/crear">Crear entrada</Link>
                      </>
                    )}
                    {/* <p className="card-text mt-4">Ahora puedes empezar a escribir tu primer entrada.</p>
                    <hr />
                    <p className='text-end'><small>{post.autor}</small></p> */}
                  </div>
                </div>


              </div>
            </div>
          </div>
        )}
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