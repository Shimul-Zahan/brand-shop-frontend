import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col'>
            <img src="/404/404.gif" alt="" />
            <Link to='/'>
                <button className='btn btn-warning'>Back to home</button>
            </Link>
        </div>
    )
}

export default Error