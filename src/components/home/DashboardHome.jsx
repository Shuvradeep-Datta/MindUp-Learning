import React from 'react'
import { Helmet } from 'react-helmet'
import Store from '../GUEST/Store'
import Categories from '../GUEST/Categories'


const DashboardHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard Home</title>
      </Helmet>
    <Categories />
    <Store />


    </div>
  )
}

export default DashboardHome