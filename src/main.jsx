import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './layouts/RootLayout';
import Product from './pages/Product';
const Men = lazy(() => import('./pages/Men'));
const Women = lazy(() => import('./pages/Women'));
const Outlet = lazy(() => import('./pages/Outlet'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'men',
        element: (
          <Suspense fallback={<p> Ładowanie... </p>}>
            <Men />
          </Suspense>
        )
      },
      {
        path: 'women',
        element: (
          <Suspense fallback={<p> Ładowanie... </p>}>
            <Women />
          </Suspense>
        )
      },
      {
        path: 'outlet',
        element: (
          <Suspense fallback={<p> Ładowanie... </p>}>
            <Outlet />
          </Suspense>
        )
      },
      {
        path: ':productId',
        element: (
          <Suspense fallback={<p> Ładowanie... </p>}> 
            <Product />
          </Suspense>
        )
      },
      {
        path: 'men/:productId',
        element: (
          <Suspense fallback={<p> Ładowanie... </p>}>
            <Product />
          </Suspense>
        )
      },
      {
        path: 'women/:productId',
        element: (
          <Suspense fallback={<p> Ładowanie... </p>}>
            <Product />
          </Suspense>
        )
      },
      {
        path: 'outlet/:productId',
        element: (
          <Suspense fallback={<p> Ładowanie... </p>}>
            <Product />
          </Suspense>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
