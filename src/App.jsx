import { useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import { adminRoutes } from '../routes';
import './App.css'

function App() {


  return (
    <>
      <div>
       <RouterProvider  router={adminRoutes}/>
       </div>
    </>
  )
}

export default App
