import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/signUp";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import Products from "../components/Products/Products";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import ProductDetails from "../components/Products/productDetails";
import MyCard from "../components/MyCard/MyCard";
import PrivateRoute from "./PrivateRoute";
import FAQ from "../components/Home/FAQ";
import ContactUs from "../components/Home/ContactUs";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('/brand.json')
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/products/:id',
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
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)

      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCard></MyCard></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/carts')
      },
      {
        path:'/faq',
        element:<FAQ></FAQ>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      }
    ]
  },
]);


export default router;