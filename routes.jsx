import { createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/auth/Login";

export const adminRoutes = createBrowserRouter([
    {
    path: "*",
    element: <div>Page not found</div>,
  },
  {
    path: "/",
    element: <Login />, 
    
  }
]);