import React from 'react'
import './App.css';
import AddCourse from './components/AddCourse.component';
import CourseCard from './components/CourseCard/CourseCard.component';
import CoursesGrid from './components/CoursesGrid/CoursesGrid.component';
import NavBar from './components/NavBar/NavBar.component';
// import { Route } from 'react-router';
// import User from './components/user.component';
// import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <NavBar 
        link1='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
        txt1='HOME'
        link2='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
        txt2='FIRST AID COURSES'
        link3='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
        txt3='EXERCISES'
        link4='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
        txt4='BLOG'
        link5='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
        txt5='ABOUT'
        link6='http://3.bp.blogspot.com/-JheFL-2nc7I/U8l1uy8nyhI/AAAAAAAAKh8/QgPFym4S3yM/s1600/doctor-emoticon-for-facebook.png'
        txt6='CONTACT US'
      />
      <AddCourse />
      {/* <BrowserRouter>
        <Route exact path='/' component={User} />
      </BrowserRouter> */}
      <CourseCard pic="https://images.unsplash.com/photo-1611764461465-09162da6465a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" alt="kid take care of his bear" title="CPR Childcare" info="open class - 20/05/2021 9:00" />
      <CoursesGrid arr={[1,2,3,4,5,6,7,8,9,10]}/>
    </div>
  );
}

export default App;
