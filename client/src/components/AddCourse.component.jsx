import React from 'react'
import AdminButton from './AdminButton.component'

const buttonHandler = () => {
 console.log('yes!');
}

export default function AddCourse() {
    return (
        <div>
            {/* TODO */}
            <label htmlFor="Course name">New Course Name: </label>
            <input type="text"/>
            <AdminButton buttonHandler={buttonHandler} buttonText="Add New Course"/>
        </div>
    )
} 