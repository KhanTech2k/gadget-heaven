import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Headphones from './Components/Headphones/headphones.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Details from './Components/Details/Details.jsx';
import Home from './Components/Home/Home.jsx';
import Category from './Components/Category/Category.jsx';
import Smartphones from './Components/Smartphones/Smartphones.jsx';
import Faq from './Components/Faq/Faq.jsx';
import Watches from './Components/Watches/Watches.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'product/:product_id',
        element: <Details></Details>,
        loader: ()=>fetch('/gadgets.json')
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: 'product',
        element: <Category></Category>,
        loader: ()=> fetch('/gadgets.json')
      },
      {
        path: '/laptops',
        element: <Laptops></Laptops>,
        loader: ()=>fetch('/gadgets.json')
      },
      {
        path:'/smartphones',
        element: <Smartphones></Smartphones>,
        loader: ()=>fetch('/gadgets.json')
      },
      {
        path:'/headphones',
        element: <Headphones></Headphones>,
        loader: ()=>fetch('/gadgets.json')
      },
      {
        path: '/details',
        element: <Details></Details>
      },
      {
        path:'/watches',
        element: <Watches></Watches>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
