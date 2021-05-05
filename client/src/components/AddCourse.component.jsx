import React from 'react'
import axios from 'axios'

const buttonHandler = async () => {
 console.log('yes!');
 await axios.post('');
}

export default function AddCourse() {
    return (
        <div className="add-course-section">
            <label htmlFor="Course name" className="input-lable">New course name: </label>
            <input type="text" className="input-area"/>
            <label htmlFor="Course length" className="input-lable">New course length: </label>
            <input type="text" className="input-area"/>
            <label htmlFor="Course price" className="input-lable">New course price: </label>
            <input type="text" className="input-area"/>
            <button onClick={buttonHandler}>Add New Course</button>
        </div>
    )
} 