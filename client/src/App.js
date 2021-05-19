import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCourse from './components/AddCourse.component';
import CourseCard from './components/CourseCard/CourseCard.component';
import CoursesGrid from './components/CoursesGrid/CoursesGrid.component';
import Footer from './components/Footer/Footer.component';
import HighlightIn2Circles from './components/HighlightIn2Circles/HighlightIn2Circles.component';
import MainButton from './components/MainButton/MainButton.component';
import NavBar from './components/NavBar/NavBar.component';
import HomePage from './pages/HomePage/HomePage.page';
import CoursesPage from './pages/CoursesPage/CoursesPage.page';

function App() {
  const [loginToggle, setLogginToggle] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <NavBar 
          link1='https://first-aid-courses.herokuapp.com/'
          txt1='HOME'
          link2='https://first-aid-courses.herokuapp.com/courses'
          txt2='FIRST AID COURSES'
          link3='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
          txt3='EXERCISES'
          link4='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
          txt4='BLOG'
          link5='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
          txt5='ABOUT'
          loginT={loginToggle}
        />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/courses' component={CoursesPage} />
            {/* <Route path="*" component={Page404} /> */}
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
