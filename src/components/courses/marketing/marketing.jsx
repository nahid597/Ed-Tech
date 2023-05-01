import React from 'react'
import CourseDetailsComponent from '../../course/courseDetails'
import { marketingVideoSource } from '../../../global/videoSources'
function MarketingComponent() {
  return (
    <>
    <h2 className='mt-4 mb-4'>Business & Marketing Course</h2>
    <CourseDetailsComponent coursesList={marketingVideoSource} />
    </>
  )
}

export default MarketingComponent