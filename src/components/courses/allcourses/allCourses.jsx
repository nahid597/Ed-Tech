import React from "react";
import "./allCourses.scss";
import { useNavigate } from "react-router-dom";
import { courses } from "../../../global/imagesSource";
import CardComponent from "../../base/card/card";

function AllCoursesComponent() {
  const navigate = useNavigate();

  const onClickGoToCourseDetails = (e, course) => {
    e.preventDefault();

    let courseComponet;

    switch (course.value) {
      case "webdesign":
        courseComponet = "/courses/web";
        break;
      case "dataengineering":
        courseComponet = "/courses/dataengineering";
        break;
      case "marketing":
        courseComponet = "/courses/marketing";
        break;
      case "higherstudy":
        courseComponet = "/courses/higherstudy";
        break;
      default:
        courseComponet = "/";
    }

    navigate(courseComponet, {
      replace: true,
    });
  };

  return (
    <>
      <div className="container">
        <h2>All Courses List</h2>
        <div className="row">
          {courses.map((course, courseIndex) => (
            <div
              onClick={(e) => onClickGoToCourseDetails(e, course)}
              className="col col-md-6 col-sm-12 courseContainer"
              key={courseIndex}
            >
              <CardComponent
                cardTitle={course.title}
                cardBody={course.text}
                imageUrl={course.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCoursesComponent;
