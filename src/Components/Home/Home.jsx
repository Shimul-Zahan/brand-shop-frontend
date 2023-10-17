import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Brand from './Brand/Brand'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

    const brands = useLoaderData();
    // console.log(brands)

    return (
        <div className=''>
            <Banner />
            <Brand brands={brands} />
        </div>
    )
}

export default Home