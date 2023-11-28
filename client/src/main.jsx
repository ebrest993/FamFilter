import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/index.jsx';
import Profile from './pages/MyFilters';
import NotFound from './pages/NotFound.jsx';
import Login from './components/Login/index.jsx';
import Signup from './components/Signup/index.jsx';
import NewPost from './pages/Create/index.jsx';
import About from './pages/About'

import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/myfilters',
        element: <Profile />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/create',
        element: <NewPost />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
