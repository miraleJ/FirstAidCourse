import React from 'react'
import './courseCardStyle.css'

export default function CourseCard(props) {
    return (
        <div className='card'>
            <img className='card-img' src={`${props.pic}`} alt={props.alt} />
            <h3>
                {props.title}
            </h3>
            <h4>
                {props.info1}
            </h4>
        </div>
    )
}