import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/product/:productId",
    element: <p> na razie brak </p>
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
