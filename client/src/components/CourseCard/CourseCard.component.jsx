import React from 'react'
import './courseCardStyle.css'

export default function CourseCard(props) {
    return (
        <div className='card'>
            <img className='card-img' src={`${props.pic}`} alt={props.alt} />
            <h3 className='card-title'>
                {props.title}
            </h3>
            <h4 className='card-description'>
                {props.info}
            </h4>
        </div>
    )
}