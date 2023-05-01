import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

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
import LoginComponent from "./components/base/login/loginComponent";
import SignupComponent from "./components/base/signup/signup";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
          <NavComponent />
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
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
          <ToastContainer />
      </Provider>
    </div>
  );  
}

export default App;
