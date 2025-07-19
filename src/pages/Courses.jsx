import React from 'react'
import { Helmet } from 'react-helmet'
import Store from '../components/GUEST/Store'
import Categories from '../components/GUEST/Categories'

function Courses() {
  return (
    <div>
      <div>
        <Helmet>
          <title>courses</title>
        </Helmet>
      </div>
      <Categories />
      <Store />
      </div>
  )
}

export default Courses