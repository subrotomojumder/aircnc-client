import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import HomeDetails from '../Pages/HomeDetails'
import SearchResult from '../Pages/SearchResult'
import PrivateRoute from './PrivateRoute'
import Checkout from '../Pages/Checkout'
import DashboardLayout from '../Layout/DashboardLayout'
import Welcome from '../Pages/Dashboard/Welcome'
import MyBooking from '../Pages/Dashboard/MyBooking'
import BecomeHost from '../Pages/Dashboard/BecomeHost'
import AllBookings from '../Pages/Dashboard/AllBookings'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AddHome from '../Pages/AddHome';
import AllHome from '../Pages/AllHome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />
      },
      {
        path: '/service-details/:id',
        element: <HomeDetails />,
        loader: ({params}) => fetch(`${process.env.REACT_APP_URL}/homes/${params.id}`)
      },
      {
        path: '/search-result',
        element: <SearchResult />
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Welcome></Welcome>
      },
      {
        path: '/dashboard/my-bookings',
        element: <PrivateRoute>
          <MyBooking></MyBooking>
        </PrivateRoute>
      },
      {
        path: '/dashboard/become-host',
        element: <PrivateRoute>
          <BecomeHost></BecomeHost>
        </PrivateRoute>
      },
      {
        path: 'all-users',
        element: <PrivateRoute>
          <AllUsers></AllUsers>
        </PrivateRoute>
      },
      {
        path: 'all-bookings',
        element: <PrivateRoute>
          <AllBookings></AllBookings>
        </PrivateRoute>
      },
      {
        path: 'add-home',
        element: <PrivateRoute>
          <AddHome></AddHome>
        </PrivateRoute>
      },
      {
        path: 'manage-home',
        element: <PrivateRoute>
          <AllHome></AllHome>
        </PrivateRoute>
      },
    ]
  }
])

export default router
