import React from 'react'
import CourseCard from '../CourseCard/CourseCard.component'
import './coursesGridStyle.css'

export default function CoursesGrid(props) {

    return (
        <div className="courses-grid">
            {props.arr.map((course, i) => {
                if (course.isPublished) {
                    return <CourseCard key={i} pic={pictures[i]} alt="healthcare" title={course.courseName} info={course.description} />
                }
            })}
        </div>
    )
}

const pictures = [
    "https://images.unsplash.com/photo-1530026454774-50cce722a1fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
    "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
    "https://images.unsplash.com/photo-1611075384322-731537ad7971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1695&q=80",
    "https://images.unsplash.com/photo-1583254447142-b47f12dd4f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1488219435247-cd511605cf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1613&q=80",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    "https://advancedct.com/wp-content/uploads/2019/01/shutterstock_657810997-300x200.jpg",
    "https://www.cprologist.com/site/wp-content/uploads/2018/10/when-to-perform-Cpr.jpg",
    "https://www.nationaljewish.org/NJH/media/img/stock/How-to-Check-for-Shortness-of-Breath.jpg"
]