import React from 'react'
import MainSection from '../../components/MainSection/MainSection.component'
import SecondarySection from '../../components/SecondarySection/SecondarySection.component'
import './HomePageStyle.css'


export default function HomePage() {
    return (
        <div className='home-page page'>
            <MainSection />
            <SecondarySection />
        </div>
    )
}
