import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';


const App = () => {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home /></div>,
  },
]);
  return (
      <RouterProvider router={router} />
  )
}

export default App