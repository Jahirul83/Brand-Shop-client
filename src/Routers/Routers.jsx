import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/signUp";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Products from "../components/Products/Products";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import ProductDetails from "../components/Products/productDetails";


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
      },
      {
        path: '/updateproduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)

      }
    ]
  },
]);


export default router;