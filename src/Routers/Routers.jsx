import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/signUp";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);


export default router;