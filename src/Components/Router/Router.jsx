import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Error from '../Error/Error';
import AddProduct from '../AddProduct/AddProduct';
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import CartItem from '../CartItem/CartItem';
import Registration from '../../Registration/Registration';
import Login from '../../Login/Login';
import Private from '../../Private/Private';
import UpdateProduct from '../../UpdateProduct/UpdateProduct';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/data/brands.json')
            },
            {
                path: '/addProduct',
                element: <Private><AddProduct /></Private>
            },
            {
                path: '/brand/:brand_name',
                element: <Products />,
                loader: ({ params }) =>fetch(`http://localhost:5000/brand/${params.brand_name}`)
            },
            {
                path: '/details/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Private><UpdateProduct /></Private>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
            },
            {
                path: '/myCart',
                element: <Private><CartItem /></Private>,
                loader: () => fetch('http://localhost:5000/carts')
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Registration />,
            },
        ]
    }
])

export default router