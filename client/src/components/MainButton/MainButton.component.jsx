import React from 'react'
import './MainButtonStyle.css'


export default function MainButton({ url, text }) {
    return (
        <a href={`${url}`} className='main-button-link'>
            <div className='main-button'>
                {text}
            </div>
        </a>
        
    )
}
