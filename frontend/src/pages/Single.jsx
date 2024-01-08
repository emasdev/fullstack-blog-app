import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

const Single = () => {

  // const post = {
  //   id: 1,
  //   titulo: "Titulo",
  //   autor: "Nombre de autor",
  //   fecha: "04/06/2024",
  //   contenido: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem minima possimus in harum voluptatum cumque provident reprehenderit iure quis facere quae voluptatibus praesentium repudiandae non ea ex, quibusdam aperiam?"
  // }

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

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