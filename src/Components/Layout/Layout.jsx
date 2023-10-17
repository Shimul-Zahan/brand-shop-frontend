import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/Navbar/Navbar'

const Layout = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout