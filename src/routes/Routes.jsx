import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../page/home/Home'
import Login from '../page/login/login'
import SignUp from '../page/signup/Signup'
import RoomDetails from '../page/roomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../page/dashboard/AddRoom'
import { getRoom } from '../api/room'

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
        element: <PrivateRoute><RoomDetails/></PrivateRoute>,
        loader: ({params})=>getRoom(params.id),
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
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
        path: '/dashboard/add-room',
        element:<PrivateRoute><AddRoom/></PrivateRoute>,
      }
    ]
  }
])
