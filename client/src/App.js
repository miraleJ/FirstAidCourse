import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import axios from 'axios';
import AddCourse from './components/AddCourse.component';
import CourseCard from './components/CourseCard/CourseCard.component';
import CoursesGrid from './components/CoursesGrid/CoursesGrid.component';
import Footer from './components/Footer/Footer.component';
import HighlightIn2Circles from './components/HighlightIn2Circles/HighlightIn2Circles.component';
import MainButton from './components/MainButton/MainButton.component';
import NavBar from './components/NavBar/NavBar.component';
import HomePage from './pages/HomePage/HomePage.page';
import CoursesPage from './pages/CoursesPage/CoursesPage.page';
import BlogPage from './pages/BlogPage/BlogPage.page';
import ExercisesPage from './pages/ExcercisesPage/Exersises.page';

function App() {
  const [loginToggle, setLogginToggle] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [spinner, setSpinner] = React.useState(true);


  const getCoursesFromAPI = async () => {
    try {
      const c = await axios.get(`https://first-aid-courses.herokuapp.com/api/courses/`)
      if (c) {
        console.log(c);
        setSpinner(false);
        setAllCourses( c.data); 
        console.log(allCourses);
      }
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
     getCoursesFromAPI();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar 
          link1='/'
          txt1='HOME'
          link2='/courses'
          txt2='FIRST AID COURSES'
          link3='/exercises'
          txt3='EXERCISES'
          link4='blog'
          txt4='BLOG'
          link5='about'
          txt5='ABOUT'
          loginT={loginToggle}
        />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/courses'>{
            spinner ?
              <div className="loader">Loading...</div> :
              <CoursesPage courses={allCourses} />
          }</Route>
          <Route exact path='/blog' component={BlogPage} />
          <Route exact path='/exercises' component={ExercisesPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
