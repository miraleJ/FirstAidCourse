import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AddCourse() {
    const [courseName, setCourseName] = useState('');
    const [courseLength, setCourseLength] = useState('');
    const [coursePrice, setCoursePrice] = useState('');

    const nameHandler = (e) => {
        setCourseName(e.target.value)
    }

    const lengthHandler = (e) => {
        setCourseLength(e.target.value)
    }

    const priceHandler = (e) => {
        setCoursePrice(e.target.value)
    }

    const buttonHandler = async () => {
        await axios.post('https://first-aid-courses.herokuapp.com/api/courses/',{
            "courseName" : courseName,
            "length" : courseLength,
            "price" : coursePrice
        });
    }    

    return (
        <div className="add-course-section">
            <label htmlFor="Course name" className="input-lable" >New course name: </label>
            <input type="text" className="input-area" id="new-course-name" onChange={nameHandler}/>
            <label htmlFor="Course length" className="input-lable">New course length: </label>
            <input type="text" className="input-area" id="new-course-length" onChange={lengthHandler}/>
            <label htmlFor="Course price" className="input-lable">New course price: </label>
            <input type="text" className="input-area" id="new-course-price" onChange={priceHandler}/>
            <button onClick={buttonHandler}>Add New Course</button>
        </div>
    )
} 