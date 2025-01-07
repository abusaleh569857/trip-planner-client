import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ViewPackage from "./components/ViewPackages/ViewPackages";
import Booking from "./components/Booking/Booking";
import Package from "./components/Package/Package";
import Discount from "./components/Discount/Discount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/packages/:id",
        element: <ViewPackage></ViewPackage>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/packages",
        element: <Package></Package>,
      },
      {
        path: "/discount-cost",
        element: <Discount></Discount>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
