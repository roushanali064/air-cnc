import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../page/home/Home'
import Login from '../page/login/login'
import SignUp from '../page/signup/Signup'
import RoomDetails from '../page/roomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails/></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <SignUp/>,
  }
])
