import React from 'react'
import { Helmet } from 'react-helmet'

const HomePages = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard || MindUP</title>
      </Helmet>
      <div className='h-screen flex justify-center text-3xl items-center'><h1>Welcome To Admin Page</h1></div>
    </>
  )
}

export default HomePages