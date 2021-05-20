import React, { useEffect, useState } from 'react'
import CoursesGrid from '../../components/CoursesGrid/CoursesGrid.component'
import './CoursesPageStyle.css'


export default function CoursesPage(props) {
    const [showCourses, setShowCourses] = useState([]);

    useEffect(() => {
        setShowCourses(props.courses);
      }, []);

    return (
        <div className='courses-page page'>
            <CoursesGrid arr={props.courses} />
        </div>
    )
}
