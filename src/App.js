import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeComponent from "./components/home/home";
import NavComponent from "./components/nav/nav";
import LiveClassComponent from "./components/liveclass/liveClass";
import CourseDetailsComponent from "./components/course/courseDetails";
import WebComponent from "./components/courses/web/web";
import MarketingComponent from "./components/courses/marketing/marketing";
import DataEngineeringComponent from "./components/courses/dataengineering/dataEngineering";
import ProductDesignComponent from "./components/courses/productdesign/productDesign";
import HigherStudyComponent from "./components/courses/higherstudy/higherStudy";
import AllCoursesComponent from "./components/courses/allcourses/allCourses";
import FooterComponent from "./components/common/footer/footer";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <NavComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/liveclass" element={<LiveClassComponent />} />
          <Route path="/courses" element={<AllCoursesComponent />} />
          <Route
            path="/courses/:courseId"
            element={<CourseDetailsComponent />}
          />
          <Route path="/courses/web" element={<WebComponent />} />
          <Route path="/courses/marketing" element={<MarketingComponent />} />
          <Route
            path="/courses/dataengineering"
            element={<DataEngineeringComponent />}
          />
          <Route
            path="/courses/productdesign"
            element={<ProductDesignComponent />}
          />
          <Route
            path="/courses/higherstudy"
            element={<HigherStudyComponent />}
          />
        </Routes>
        <FooterComponent />
      </Provider>
    </div>
  );  
}

export default App;
