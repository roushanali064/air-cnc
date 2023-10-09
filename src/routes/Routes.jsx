import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../page/home/Home'
import Login from '../page/login/login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>,
  }
])
