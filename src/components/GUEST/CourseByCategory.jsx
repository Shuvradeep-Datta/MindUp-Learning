import React from 'react'
import { useParams } from 'react-router-dom'

import { Helmet } from 'react-helmet';
import Categories from './Categories';
import Courses from '../../pages/Courses';


const CourseByCategory = () => {
    const {categoryId} = useParams();
  return (
    <div>
        <div>
            <Helmet>
                <title>Product Store</title> 
            </Helmet>
        </div>

        <Categories />
        <div className='p-5'>
            <h3>{categoryId}</h3>
        <p>this is category course page</p>
        </div>
    </div>
  )
}

export default CourseByCategory