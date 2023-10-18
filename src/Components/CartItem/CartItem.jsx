import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Navbar from '../Home/Navbar/Navbar';

const CartItem = () => {

    const cartItem = useLoaderData();
    // console.log(cartItem)
    const navigate = useNavigate();

    const deleteItem = id => {
        fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => navigate('/myCart'))
    }

    return (
        <div>
            <div className='bg-black'>
                <div className='container mx-auto'>
                    <Navbar />
                </div>
            </div>
            <div className='min-h-screen container mx-auto py-20'>
                <h1 className="text-5xl font-thin text-center mb-10">Your cart items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
                    {
                        cartItem.map(item => 
                            <div key={item._id} className='border-2 rounded-lg border-black flex justify-between items-center'>
                                <div className='flex justify-start gap-8 items-center'>
                                    <img src={item?.image} alt="" className='h-40 w-40 rounded-lg' />
                                    <div className='space-y-3'>
                                        <h1><strong>Name: </strong>{ item?.name }</h1>
                                        <h1><strong>Price: </strong> {item?.price} TK</h1>
                                        <h1><strong>Rating: </strong> {item?.rating}</h1>
                                        <h1><strong>Brand: </strong> {item?.brand_name}</h1>
                                    </div>
                                </div>
                                <button onClick={()=> deleteItem(item._id)} className="text-gray-600 transition hover:text-red-600 mr-10">
                                    <span className="sr-only">Remove item</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-10 w-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CartItem