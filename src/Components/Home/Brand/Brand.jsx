import React from 'react'
import { Link } from 'react-router-dom'

const Brand = ({ brands }) => {

    // const { image_name, id, brand } = brands;

    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-5xl font-bold text-center'>Our Selling Brands</h1>
            <div className='flex justify-center items-center'>
                <div className='py-20 grid grid-cols-1 lg:grid-cols-4 gap-20'>
                    {
                        brands.map(brand => 
                            <Link key={brand.id} to={`brand/${brand.id}`}>
                                <article
                                    className="hover:animate-background rounded-full h-[310px] w-[310px] flex justify-center items-center bg-gradient-to-r from-[#FF6600] via-[#6f4c36] to-[#4b2b1f] p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                                >
                                    <div className="bg-white space-y-5 h-[290px]  flex justify-center items-center flex-col rounded-full w-[290px] p-4 !pt-20 sm:p-6">
                                        <img src={brand?.image_name} className='h-32 w-52' />
                                        <h1 className='text-2xl font-bold'>{brand?.brand}</h1>
                                    </div>
                                </article>
                            </Link>
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Brand