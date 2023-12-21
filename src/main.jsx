import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Welcome from './components/welcome/welcome.jsx';
import About from './components/about/about.jsx';
import Menu from './components/menu/menu.jsx';
import Contact from './components/contact/contact.jsx';
import Awards from './components/awards/awards.jsx';
import Gallery from './components/gallery/gallery.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/awards',
        element: <Awards />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
