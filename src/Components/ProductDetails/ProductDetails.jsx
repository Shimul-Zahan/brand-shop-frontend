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
                    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                        <dl className="-my-3 divide-y divide-gray-100 text-sm">
                            <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                            >
                                <dt className="font-medium text-gray-900">Name</dt>
                                <dd className="text-gray-700 sm:col-span-2">{product?.name}</dd>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                            >
                                <dt className="font-medium text-gray-900">Brand</dt>
                                <dd className="text-gray-700 sm:col-span-2">{product?.brand_name}</dd>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                            >
                                <dt className="font-medium text-gray-900">Price</dt>
                                <dd className="text-gray-700 sm:col-span-2">{product?.price}</dd>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                            >
                                <dt className="font-medium text-gray-900">Category</dt>
                                <dd className="text-gray-700 sm:col-span-2">{product?.category}</dd>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                            >
                                <dt className="font-medium text-gray-900">Rating</dt>
                                <dd className="text-gray-700 sm:col-span-2">{product?.rating}</dd>
                            </div>

                            <div
                                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                            >
                                <dt className="font-medium text-gray-900">Details</dt>
                                <dd className="text-gray-700 sm:col-span-2">
                                    {product?.description}
                                </dd>
                            </div>
                        </dl>
                    </div>
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