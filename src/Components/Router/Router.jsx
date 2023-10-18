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
                element: <AddProduct />
            },
            {
                path: '/brand/:brand_name',
                element: <Products />,
                loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.brand_name}`)
            },
            {
                path: '/details/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/myCart',
                element: <ProductDetails />,
                loader: () => fetch(`http://localhost:5000/carts`)
            },
        ]
    }
])

export default router