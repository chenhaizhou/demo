import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Company from './pages/Company'
import Account from './pages/Account'
import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'company/:companyName?/:tabName?',
        element: <Company />
      },
      {
        path: 'account/:type',
        element: <Account />
      },
    ]
  }
])
