import React from 'react'
import BgImage from '../../../../public/assets/banner-image/lum3n--RBuQ2PK_L8-unsplash.jpg'
// import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { BsTelephoneFill, BsSearch } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';

const Banner = () => {
  return (
      <div className='max-h-screen -mt-[118px] lg:-mt-[193px] w-full top-0 bg-[#ffffff] bg-blend-overlay bg-opacity-60'
          style={{
              backgroundImage: `url(${BgImage})`, backgroundSize: 'cover',
              backgroundPosition: 'center',
          }}>

          <div className='container mx-auto flex justify-center flex-col h-screen items-center space-y-3 lg:mt-20' data-aos="fade-in">
              <div className='md:mb-8 flex justify-between items-center relative w-9/12 md:w-1/3 input mt-20 bg-transparent input-bordered border-black'>
                  <button className='btn bg-transparent btn-outline absolute left-0 outline-none border-none'>
                      <BiMicrophone className='text-2xl text-black font-thin' />
                  </button>
                  <input type="text" className='px-10 bg-transparent text-lg font-thin w-full text-black placeholder:text-black' placeholder='Search your best brand' />
                  <button className='btn bg-transparent btn-outline absolute right-0 outline-none border-none'>
                      <BsSearch className='text-2xl text-black font-thin' />
                  </button>
              </div>
              {/* <h1 className='text-2xl lg:h-24 text-center md:text-5xl font-bold text-black'> Welcome to  AlgoWebBot Event Management Family.</h1> */}
              {/* <Marquee>
                  
              </Marquee> */}
              <p className='text-black text-sm font-thin md:text-xl text-center md:max-w-[750px]'>At <span className='text-black font-bold'>AlgoWebBot</span>, we are passionate about creating unforgettable moments in the world of technology and gaming. Whether you're an avid gamer, a tech enthusiast, or a visionary developer, we've got something extraordinary for you.</p>

              <div className='pt-8'>
                  <Link to='/contact'>
                      <h1 className='btn bg-black text-white capitalize text-lg font-thin px-8'><span>
                          <BsTelephoneFill className='text-lg font-thin mr-2' />
                      </span>Call Us Now</h1>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Banner