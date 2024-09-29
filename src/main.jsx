import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import AuthProvider from "./provider/AuthProvider";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/routes/PrivateRoute";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     // errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/register",
//         element: <Register />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/orders",
//         element: <Orders />,
//       },
//       {
//         path: '/profile',
//         element: <PrivateRoute><Profile></Profile></PrivateRoute>
//       }
//     ],
//   },
// ]);


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <div className="container mx-auto">
//       <AuthProvider>
//         <RouterProvider router={router} />
//       </AuthProvider>
//     </div>
//   </StrictMode>
// );
