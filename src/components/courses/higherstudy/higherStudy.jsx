import React from 'react'
import CourseDetailsComponent from '../../course/courseDetails'
import { higherStudyVideoSource } from '../../../global/videoSources'

function HigherStudyComponent() {
  return (
    <>
    <h2 className='mt-4 mb-4'>Higher Study Course</h2>
    <CourseDetailsComponent coursesList={higherStudyVideoSource} />
    </>
  )
}

export default HigherStudyComponent