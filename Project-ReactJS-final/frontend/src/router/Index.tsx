import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import Notfound from "../page/Notfound";
import Contact from "../page/Contact";
import About from "../page/About";
import SignIn from "../page/SignIn";
import ProductDetail from "../page/ProductDetail";
import SignUp from "../page/SignUp";
import { CartOrder } from "../page/CartOrder";
import { Checkout } from "../page/Checkout";
import { OurShop } from "../page/OurShop";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "contact",
        element: <Contact></Contact>
    },
    {
        path: "about",
        element: <About></About>
    },
    {
        path: "our-shop",
        element: <OurShop></OurShop>
    },
    {
        path: "signin",
        element: <SignIn></SignIn>
    },
    {
        path: "signup",
        element: <SignUp></SignUp>
    },
    {
        path: "product/:id",
        element: <ProductDetail></ProductDetail>
    },
    {
        path: "cart",
        element: <CartOrder></CartOrder>
    },
    {
        path: "checkout",
        element: <Checkout></Checkout>
    },
    {
        path: "*",
        element: <Notfound></Notfound>
    }
])