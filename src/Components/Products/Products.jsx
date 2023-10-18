import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import { Link, useLoaderData } from 'react-router-dom'
import { BsCheckLg } from 'react-icons/bs';

const Products = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 min-h-screen'>
                {
                    data.length > 0 ? 
                        data.map(product => 
                            <div key={product._id} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                                <img
                                    alt="Home"
                                    src={product?.image}
                                    className="h-56 w-full rounded-md"
                                />

                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            {/* <dt className="sr-only">Price</dt> */}
                                            <h1 className="text-lg text-gray-500">{product?.price}৳</h1>
                                        </div>

                                        <div>
                                            <h1 className="font-medium text-xl">{product?.name}</h1>
                                        </div>
                                    </dl>

                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>

                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500 text-base">Brand</p>
                                                <p className="font-medium text-base">{product?.brand_name}</p>
                                            </div>
                                        </div>

                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>

                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500 text-base">Rating</p>
                                                <p className="font-medium text-base">{product?.rating}</p>
                                            </div>
                                        </div>

                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                />
                                            </svg>

                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500 text-base">Catagory</p>
                                                <p className="font-medium text-base">{product?.category}</p>
                                            </div>
                                        </div>
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                />
                                            </svg>

                                            <Link to={`/details/${product._id}`}>
                                                <div className="mt-1.5 sm:mt-0">
                                                    <p className="font-medium text-base">Details</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <div className='text-xl font-bold text-center'> Item Not Fount </div>
                }
            </div>
        </div>
    )
}

export default Products