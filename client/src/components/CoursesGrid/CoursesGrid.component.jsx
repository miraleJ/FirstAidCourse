import React from 'react'
import CourseCard from '../CourseCard/CourseCard.component'
import './coursesGridStyle.css'

export default function CoursesGrid(props) {
    return (
        <div className="courses-grid">
            {props.arr.map((course, i) => <CourseCard key={i} pic="https://images.unsplash.com/photo-1611764461465-09162da6465a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" alt="kid take care of his bear" title="CPR Childcare" info="open class - 20/05/2021 9:00"/>)}
        </div>
    )
}
