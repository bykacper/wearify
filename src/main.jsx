import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
