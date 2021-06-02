import React from "react";
import AdminCoursesList from "pages/admin-courses-list/AdminCoursesList";
import CourseHome from "pages/course-home/CourseHome";
import { Route, Switch } from "react-router-dom";
import PrivateStudentRoute from "./PrivateStudentRoute";
import PrivateAdminRoute from "./PrivateAdminRoute";
import AdminCourse from "pages/admin-course/AdminCourse";
import Announcements from "pages/announcements/AnnouncementsList";
import BugsReport from "pages/BugsReport";
import Lesson from "pages/Lesson";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import CreateTest from "pages/CreateTest";

import CreateExercise from "pages/CreateExercise";
import Signup from "pages/signup/Signup";
import DashboardHome from "pages/dashboard-home/DashboardHome";
import Article from "pages/article/Article";
import ContactUs from "pages/contact-us/ContactUs";
import Community from "pages/Community";
import NotFound from "components/NotFound";
import AboutCourses from "pages/AboutCourses";
import Search from "pages/Search";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/community">
        <Community />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/contact">
        <ContactUs />
      </Route>

      <Route exact path="/about-courses">
        <AboutCourses />
      </Route>

      <PrivateStudentRoute Component={DashboardHome} exact path="/courses" />

      <PrivateStudentRoute
        Component={CourseHome}
        exact
        path="/courses/:courseSlug"
      />

      <PrivateStudentRoute
        Component={Lesson}
        isEdit={false}
        isAdmin={false}
        isCreated={true}
        exact
        path="/courses/:courseSlug/lessons/:lessonSlug"
      />

      <PrivateStudentRoute
        Component={Lesson}
        isEdit={false}
        isAdmin={false}
        exact
        path="/lessons/:lessonSlug"
      />

      <PrivateStudentRoute Component={Search} exact path="/search" />


      <PrivateAdminRoute
        Component={AdminCoursesList}
        exact
        path="/admin/courses"
      />

      <PrivateAdminRoute
        Component={AdminCourse}
        exact
        path="/admin/courses/:courseSlug"
      />

      <PrivateAdminRoute
        Component={Announcements}
        exact
        path="/admin/announcements"
      />

      <PrivateAdminRoute Component={BugsReport} exact path="/admin/bugs" />

      <PrivateAdminRoute
        Component={Lesson}
        isEdit={true}
        isAdmin={true}
        exact
        path="/admin/courses/:courseSlug/lessons/:lessonSlug"
      />


      <PrivateAdminRoute
        Component={CreateTest}
        exact
        path="/admin/courses/:courseSlug/new-test"
      />
      <PrivateAdminRoute
        Component={CreateExercise}
        exact
        path="/admin/courses/:courseSlug/new-exercise"
      />
      <PrivateAdminRoute
        Component={Article}
        isCreated={false}
        isAdmin={true}
        exact
        path="/admin/courses/:courseSlug/new-article"
      />

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
