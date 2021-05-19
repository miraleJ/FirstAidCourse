import React, { useState } from 'react'
import MoreMenu from '../MoreMenu/MoreMenu.component';
import './NavBarStyle.css'


export default function NavBar(props) {
    const [moreToggle, setMoreToggle] = useState(false);

    const clickMore = () => {
        setMoreToggle(!moreToggle)
        console.log("open more menu "+props.loginT + "more: "+ moreToggle)
    }

    return (
        <div className="nav-bar-and-more">
            <div className='nav-bar'>
                <div className='nav-bar-link'>
                    <a href={props.link1}>{props.txt1}</a>
                </div>
                <div className='nav-bar-link'>
                    <a href={props.link2}>{props.txt2}</a>
                </div>
                <div className='nav-bar-link'>
                    <a href={props.link3}>{props.txt3}</a>
                </div>
                <div className='nav-bar-link logo'>
                </div>
                <div className='nav-bar-link'>
                    <a href={props.link4}>{props.txt4}</a>
                </div>
                <div className='nav-bar-link'>
                    <a href={props.link5}>{props.txt5}</a>
                </div>
                <div className='nav-bar-link'>
                    <p className='more' onClick={clickMore}>+ MORE</p>
                </div>
            </div>
            {moreToggle ? <MoreMenu moreClickHandler={clickMore}/> : ""} 
        </div> 
    )
}
