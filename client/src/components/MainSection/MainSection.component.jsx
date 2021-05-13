import React from 'react'
import './MainSectionStyle.css'
import HighlightIn2Circles from '../HighlightIn2Circles/HighlightIn2Circles.component'
import MainButton from '../MainButton/MainButton.component'

export default function MainSection() {
    return (
        <div className='main-section'>
            {/* TODO - change url */}
            <MainButton url='https://github.com/miraleJ/FirstAidCourse' text='BOOK A FIRST-AID COURSE'/>
            <div className="highlight">
                <HighlightIn2Circles />
            </div>
        </div>
    )
}
