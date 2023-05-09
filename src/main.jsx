import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage";
import Animals from './routes/Animals.jsx';
import Donations from './routes/Donations.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "zivotinje",
    element: <Animals />,
  },
  {
    path: "donacije",
    element: <Donations />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
