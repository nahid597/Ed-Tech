import React from 'react'
import CourseDetailsComponent from '../../course/courseDetails';
import { webDevelopmentVideoSource } from '../../../global/videoSources';

function WebComponent() {
  return (
    <>
    <h2 className='mt-4 mb-4'>Web Development Course</h2>
    <CourseDetailsComponent coursesList={webDevelopmentVideoSource} />
    </>
  )
}

export default WebComponent