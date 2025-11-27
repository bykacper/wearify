import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ErrorElement from './ErrorElement';
const Men = lazy(() => import('./pages/Men'));
const Women = lazy(() => import('./pages/Women'));
const Outlet = lazy(() => import('./pages/Outlet'));
const Product = lazy(() => import('./pages/Product'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Ładowanie...</p>}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'men', element: <Men /> },
      { path: 'women', element: <Women /> },
      { path: 'outlet', element: <Outlet /> },
      { path: ':productId', element: <Product />},
      { path: ':category/:productId', element: <Product /> },
    ],
    errorElement: <ErrorElement />
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
