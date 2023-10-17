import React from 'react'

const Brand = ({ brands }) => {

    // const { image_name, id, brand } = brands;

    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-5xl font-bold text-center'>Our Selling Brands</h1>
            <div className='flex justify-center items-center'>
                <div className='py-10 grid grid-cols-1 lg:grid-cols-4 gap-20'>
                    {
                        brands.map(brand => 
                            <div key={brand.id} className='w-[300px] h-[300px] border-2 border-dashed rounded-full border-white hover:border-yellow-500'>
                                <div className='input input-bordered border-black border-2 w-[300px] h-[300px] rounded-full flex justify-center items-center flex-col space-y-4 hover:border-border-black cursor-pointer hover:transform hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 ease-in-out p-4'>
                                    <img src={brand?.image_name} className='h-32 w-32' />
                                    <h1 className='text-2xl font-bold'>{brand?.brand}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Brand