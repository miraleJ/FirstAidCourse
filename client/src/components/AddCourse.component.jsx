import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AddCourse() {
    const [courseName, setCourseName] = useState('');

    const nameHandler = (e) => {
        setCourseName(e.target.value)
    }

    const buttonHandler = async () => {
        await axios.post('https://first-aid-courses.herokuapp.com/api/courses/',{
            "courseName" : courseName,
            "length" : 1.5,
            "price" : 159.9
        });
    }    

    return (
        <div className="add-course-section">
            <label htmlFor="Course name" className="input-lable" >New course name: </label>
            <input type="text" className="input-area" id="new-course-name" onChange={nameHandler}/>
            <label htmlFor="Course length" className="input-lable">New course length: </label>
            <input type="text" className="input-area"/>
            <label htmlFor="Course price" className="input-lable">New course price: </label>
            <input type="text" className="input-area"/>
            <button onClick={buttonHandler}>Add New Course</button>
        </div>
    )
} 