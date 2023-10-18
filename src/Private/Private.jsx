import React, { useContext, useState } from 'react'
import { MyContext } from '../Auth/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const Private = ({ children }) => {

  const { user, loading } = useContext(MyContext)
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <div className='h-screen w-full flex justify-center items-center'>
      <span className="loading loading-spinner text-primary"></span>
      <span className="loading loading-spinner text-secondary"></span>
      <span className="loading loading-spinner text-accent"></span>
      <span className="loading loading-spinner text-neutral"></span>
    </div>
  }

  if (user) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to='/login'></Navigate>
  )
}

export default Private