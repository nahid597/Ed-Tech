import React from "react";
import "./container.scss";
import { useSelector, useDispatch } from "react-redux";
import { showingCourseList, youtubeEmbedId } from "../../../redux/course/courseActions";

function ContainerComponent({ course,courseContainerId }) {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClickContainer = (e, courseId) => {
    e.preventDefault();

    dispatch(showingCourseList());

    console.log(courseContainerId);
  };

  const onClickCourseItem = (e, course) => {
    e.preventDefault();
    console.log(state);
    dispatch(youtubeEmbedId(course.embedId));

  };

  return (
    <div className="divContainer">
      {course && (
        <div
          onClick={e => onClickContainer(e, courseContainerId)}
          className="d-flex p-2 justify-content-between con"
        >
          <h4 className="">{course ? course.title : "No Title"}</h4>
          <p className={`${state.showingCourseList ? "downArrow" : "downArrow"}`}>
            &gt;
          </p>
        </div>
      )}
      { course && course.videosUrl.length > 0 && (
        <div className="d-flex flex-column containerItem">
          {course.videosUrl.map((course, index) => (
            <div key={index} className="p-2" style={{ display: "inline-flex" }}>
              <span>
                <img
                  height="30px"
                  width="30px"
                  src="http://localhost:3000/youtube.webp"
                  alt="no-action"
                />
              </span>
              <p style={{ marginLeft: "10px" }} onClick={(e) => onClickCourseItem(e, course)}>
                {course.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContainerComponent;
