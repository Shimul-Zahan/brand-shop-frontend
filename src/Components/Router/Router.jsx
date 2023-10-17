import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1 className='text-center text-dark'>Client site here</h1>
    }
])

export default router