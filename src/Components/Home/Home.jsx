import React from 'react'
import Banner from './Banner/Banner'
import Brand from './Brand/Brand'
import { useLoaderData } from 'react-router-dom'
import Trade from './Trade/Trade'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import Navbar from './Navbar/Navbar'
import Slider from '../Slider/Slider'

const Home = () => {

    const brands = useLoaderData();
    // console.log(brands)

    return (
        <div className=' dark:bg-black'>
            <div className='container mx-auto'>
                <Navbar />
            </div>
            <Banner />
            <Brand brands={brands} />
            <Trade />
            <WhyChooseUs />
        </div>
    )
}

export default Home