import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Single from './pages/Single.jsx';
import Write from './pages/Write.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { AuthContexProvider } from './context/authContext.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/crear",
        element: <Write />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContexProvider>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </AuthContexProvider>
  </React.StrictMode>,
)


