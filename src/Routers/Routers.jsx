import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/signUp";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Products from "../components/Products/Products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/products')

      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);


export default router;