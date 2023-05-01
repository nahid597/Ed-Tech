import React, { useState } from "react";
import "./home.scss";

import ImageSliderComponent from "../imageslider/imageSlider";
import { courses } from "../../global/imagesSource";
import CoursesComponent from "../courses/courses";
import LearningComponent from "../common/learning/learning";
import ClassContainerComponent from "../common/classcontainer/classContainer";
import {  useNavigate } from 'react-router-dom';
import PartnersComponent from "../common/partners/partners";

function HomeComponent() {
  const navigator = useNavigate();

  const [showLiveClass, setShowLiveClass] = useState(false);
  const [showSheet, setShowSheet] = useState(false);
  const [showHomeWork, setShowHomeWork] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "500px",
    margin: "0 auto",
  };

  const onClickLiveClass = () => {
    setShowLiveClass(!showLiveClass);
    setShowHomeWork(false);
    setShowSheet(false);
  };
  const onClickSheet = () => {
    setShowSheet(!showSheet);
    setShowLiveClass(false);
    setShowHomeWork(false);
  };
  const onClickHomeWork = () => {
    setShowHomeWork(!showHomeWork);
    setShowLiveClass(false);
    setShowSheet(false);
  };

  const onClickChooseCourses = (e) => {
    e.preventDefault();

    navigator('/courses', {
      replace: true
    })

  }

  return (
    <div>
      <div style={containerStyle}>
        <ImageSliderComponent slides={courses} />
      </div>
      <div className="courseText">
        <h2>Let the journey of organizing your own learning begin</h2>
      </div>
      <div className="courseListContainer">
        <CoursesComponent />
      </div>
      <div style={{ marginTop: "15%" }}>
        <LearningComponent />
      </div>
      <div className="courseText">
        <h2>What is in the online batch throughout the year?</h2>
      </div>
      <div className="onlineClassContainer">
        <div className="row">
          <div className="col col-md-6 col-sm-12">
            <ClassContainerComponent
              cardTitle="Complete syllabus cover through live classes"
              imageUrl="http://localhost:3000/youtube.webp"
              showCardBody={showLiveClass}
              onClickContainer={onClickLiveClass}
              cardBody="One teacher will take the class, the second teacher will answer your various questions"
            />
            <ClassContainerComponent
              cardTitle="Lecture sheets and recorded classes"
              imageUrl="http://localhost:3000/list.webp"
              showCardBody={showSheet}
              onClickContainer={onClickSheet}
              cardBody="The recorded version of the live class and the lecture sheet will be available at the end of each class"
            />
            <ClassContainerComponent
              cardTitle="Regular homework and tests"
              imageUrl="http://localhost:3000/list.webp"
              showCardBody={showHomeWork}
              onClickContainer={onClickHomeWork}
              cardBody="Homework at the end of each class and subject tests and progress report cards each week"
            />
          </div>
          <div className="col col-md-6 col-sm-12">
            <img
              height="400px"
              width="100%"
              src="http://localhost:3000/live_class.webp"
              alt="no-action"
            />
          </div>
        </div>
      </div>
      <div className="coursesButton">
         <button onClick={onClickChooseCourses} className="btn btn-success">Choose your courses &nbsp; <span className="rightArrowSymbol">&gt;</span> </button>
      </div>
      <div className="partnersContainer">
         <PartnersComponent />
      </div>
    </div>
  );
}

export default HomeComponent;
