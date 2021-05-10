import React from 'react'
import './NavBarStyle.css'

export default function NavBar(props) {
    return (
        <div className='nav-bar'>
            <div className='nav-bar-link'><a href={props.link1}>{props.txt1}</a></div>
            <div className='nav-bar-link'><a href={props.link2}>{props.txt2}</a></div>
            <div className='nav-bar-link'><a href={props.link3}>{props.txt3}</a></div>
            <div className='nav-bar-link logo'><img src="./first-aid-with-amir-logo.png" alt="two hearts"/></div>
            <div className='nav-bar-link'><a href={props.link4}>{props.txt4}</a></div>
            <div className='nav-bar-link'><a href={props.link5}>{props.txt5}</a></div>
            <div className='nav-bar-link'><a href={props.link6}>{props.txt6}</a></div>
        </div>
    )
}
