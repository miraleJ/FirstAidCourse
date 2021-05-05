import React from 'react'
import './App.css';
import AddCourse from './components/AddCourse.component';
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
    </div>
  );
}

export default App;
