import React from 'react'
import BgImage from '/assets/banner-image/Screenshot.png'


const Trade = () => {
    return (
        <div className='w-full top-0 bg-[#ffffff] bg-blend-overlay bg-opacity-0 py-20 bg-fixed'
            style={{
                backgroundImage: `url(${BgImage})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className='flex justify-center items-center h-screen flex-col space-y-5 p-2 lg:space-y-20'>
                <h1 className='text-xl lg:text-5xl font-bold text-white text-center mb-10'>Trade with confidence from production quality<br />to purchase protection</h1>
                <div className='flex justify-center items-center flex-col lg:flex-row gap-8 lg:gap-10'>
                    <div className='bg-[#755D53] bg-blend-overlay bg-opacity-70 w-full lg:w-[700px] p-2 lg:p-10 space-y-2 lg:space-y-4 rounded-lg'>
                        <h1 className='text-base lg:text-xl font-bold text-white'>Ensure production quality with</h1>
                        <img src="/assets/banner-image/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png" alt="" className='w-52 lg:w-96 lg:h-20' />
                        <p className='text-sm lg:text-lg font-thin text-white'>Connect with a variety of suppliers, including Custom Manufacturers, Brand <br />Holders, and Multispecialty Suppliers, that have verified credentials and <br />capabilities.</p>
                        <div className='flex justify-start items-center gap-5 mt-4'>
                            <p className='border-2 border-white lg:w-64 p-2 rounded-full text-white text-xs lg:text-xl lg:font-bold'>Connect With Us Now</p>
                            <p className='text-white underline text-xs lg:text-xl font-bold'>Read more...</p>
                        </div>
                    </div>
                    <div className='bg-[#755D53] bg-blend-overlay bg-opacity-70 w-full lg:w-[700px] p-2 lg:p-10 space-y-2 lg:space-y-4 rounded-lg'>
                        <h1 className='text-base lg:text-xl font-bold text-white'>Ensure production quality with</h1>
                        <img src="/assets/banner-image/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.avif" alt="" className='w-52 lg:w-96 lg:h-20' />
                        <p className='text-sm lg:text-lg font-thin text-white'>Connect with a variety of suppliers, including Custom Manufacturers, Brand <br />Holders, and Multispecialty Suppliers, that have verified credentials and <br />capabilities.</p>
                        <div className='flex justify-start items-center gap-5 mt-4'>
                            <p className='border-2 border-white lg:w-64 p-2 rounded-full text-white text-xs lg:text-xl lg:font-bold'>Connect With Us Now</p>
                            <p className='underline text-white text-xs lg:text-xl font-bold'>Read more...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade