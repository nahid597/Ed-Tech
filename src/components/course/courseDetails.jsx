import React from "react";
import "./courseDetails.scss";
import { useSelector } from "react-redux";
import EmbedComponent from "../common/embed/embed";
import ContainerComponent from "../base/container/container";

function CourseDetailsComponent({ coursesList }) {
  const state = useSelector((state) => state);

  console.log(state.courseReducer.courseDetails);

  return (
    <div className="row">
      <div className="col col-md-8 col-sm-12">
        <EmbedComponent title="Youtube" height="450px"></EmbedComponent>
      </div>
      <div className="col col-md-4 col-sm-12 courseList">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Course content</h5>
            <hr />
            <div className="overflowX" style={{ height: "500px" }}>
              {coursesList.map((course, index) => (
                <div key={course.id}>
                  <ContainerComponent
                    courseContainerId={course.id}
                    course={course}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsComponent;
