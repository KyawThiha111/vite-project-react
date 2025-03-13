import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { PostPage } from './Pages/PostPage.jsx'
import { ErrorPage } from './Pages/Error.jsx'
import { Navbar } from './Pages/Navbar.jsx'
import {StudentInfo} from "./Pages/StudentInfo.jsx"
import { ReadMore } from './Pages/Readmore.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<div>
    <Navbar /> {/* Navbar will appear on every page */}
    <Outlet /> {/* This renders the matched route */}
  </div>, // Use the Layout component
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Default route for '/'
        element: <Home />,
      },
      {
        path: 'postpage',
        element: <PostPage />,
      },
      {
        path:'students/:name',
        element:<StudentInfo/>
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
