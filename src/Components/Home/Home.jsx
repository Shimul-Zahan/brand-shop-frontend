import React from 'react'
import Banner from './Banner/Banner'
import Brand from './Brand/Brand'
import { useLoaderData } from 'react-router-dom'
import Trade from './Trade/Trade'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'

const Home = () => {

    const brands = useLoaderData();
    // console.log(brands)

    return (
        <div className=''>
            <Banner />
            <Brand brands={brands} />
            <Trade />
            <WhyChooseUs />
        </div>
    )
}

export default Home