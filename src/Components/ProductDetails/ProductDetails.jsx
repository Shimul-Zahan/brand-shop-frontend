import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import { Link, useLoaderData } from 'react-router-dom'

const ProductDetails = () => {

    const product = useLoaderData();
    // console.log(product)

    const addToCart = () => {
        // console.log(product)
        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className='bg-black'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </div>
            <div className='py-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-10 p-2 justify-end lg:justify-start'>
                <div>
                    <img src={product?.image} alt="" className='rounded-lg lg:h-[600px] w-full' />
                </div>
                <div className='text-xl space-y-4'>
                    <h1 className=''><strong>Name:</strong> {product?.name}</h1>
                    <hr />
                    <h1 className=''><strong>Brand:</strong> {product?.brand_name}</h1>
                    <hr />
                    <h1 className=''><strong>Price:</strong> {product?.price} TK</h1>
                    <hr />
                    <h1 className=''><strong>Catagory:</strong> {product?.category}</h1>
                    <hr />
                    <h1 className=''><strong>Rating:</strong> {product?.rating}</h1>
                    <hr />
                    <h1 className=''><strong>Details:</strong> {product?.description}</h1>
                    <div className='flex justify-start items-center gap-5 lg:pt-10'>
                        <h1 onClick={addToCart} className='rounded-full border-2 cursor-pointer border-black w-52 p-2 flex justify-center items-center'>Add to cart</h1>
                        <Link to='/'>
                            <h1 className='rounded-full border-2 cursor-pointer border-black w-52 p-2 flex justify-center items-center'>Back to home</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails