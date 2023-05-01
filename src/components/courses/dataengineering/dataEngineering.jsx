import React from 'react'
import CourseDetailsComponent from '../../course/courseDetails'
import { dataEngineeringVideoSource } from '../../../global/videoSources'

function DataEngineeringComponent() {
  return (
    <>
    <h2 className='mt-4 mb-4'>Data Engineering Course</h2>
    <CourseDetailsComponent coursesList={dataEngineeringVideoSource} />
    </>
  )
}

export default DataEngineeringComponent