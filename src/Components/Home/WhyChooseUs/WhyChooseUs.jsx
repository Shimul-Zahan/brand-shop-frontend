import React from 'react'

const WhyChooseUs = () => {
    return (
        <div>
            <div className='container mx-auto min-h-[500px] flex flex-col-reverse lg:flex-row justify-start items-center gap-5 lg:gap-20 p-2 py-20'>
                <h1 className="text-3xl lg:text-6xl text-black">Explore millions of offerings <br />tailored to your business <br />needs</h1>
                <div className='grid grid-cols-2 gap-5 lg:gap-20 mb-5'>
                    <div className='space-y-16'>
                        <div className='border-l-4 pl-3'>
                            <h1 className='text-5xl font-thin text-[#FF6600]'>200M+</h1>
                            <p className='text-2xl font-thin text-[gray]'>Products</p>
                        </div>
                        <div className='border-l-4 pl-3'>
                            <h1 className='text-5xl font-thin text-[#FF6600]'>6069+</h1>
                            <p className='text-2xl font-thin text-[gray]'>Products Categories</p>
                        </div>
                    </div>
                    <div className='space-y-16'>
                        <div className='border-l-4 pl-3'>
                            <h1 className='text-5xl font-thin text-[#FF6600]'>100K+</h1>
                            <p className='text-2xl font-thin text-[gray]'>Suppliers</p>
                        </div>
                        <div className='border-l-4 pl-3'>
                            <h1 className='text-5xl font-thin text-[#FF6600]'>50K+</h1>
                            <p className='text-2xl font-thin text-[gray]'>Countries & Region</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs