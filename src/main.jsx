import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import Contact from './routes/contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>
  </StrictMode>,
)
