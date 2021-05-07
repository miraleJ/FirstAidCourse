import React from 'react'
import './App.css';
import AddCourse from './components/AddCourse.component';
import CourseCard from './components/CourseCard/CourseCard.component';
import CoursesGrid from './components/CoursesGrid/CoursesGrid.component';
// import { Route } from 'react-router';
// import User from './components/user.component';
// import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
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
