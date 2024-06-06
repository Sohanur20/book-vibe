import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagestoRead from './Components/PagestoRead/PagestoRead';
import DetailsBook from './Components/pages/DetailsBook/DetailsBook';
import Error from './Components/error/Error';
import About from './Components/About/About';
import Contacts from './Components/contact/Contacts';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error> ,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('/Data.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader : () => fetch('/Data.json')
      },
      {
        path: "/pagesToRead",
        element: <PagestoRead></PagestoRead>,
        loader : () => fetch('/Data.json')
      },
      {
        path: "/detailsBook/:id",
        element: <DetailsBook></DetailsBook>
        
      },
      {
        path: '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contacts></Contacts>
      }

    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
