import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MoreMenu from '../MoreMenu/MoreMenu.component';
import './NavBarStyle.css'


export default function NavBar(props) {
    const [moreToggle, setMoreToggle] = useState(false);

    const clickMore = () => {
        setMoreToggle(!moreToggle)
    }

    const clickNavBarOption = () => {
        if (moreToggle) {
            setMoreToggle(!moreToggle);
        }
    }

    return (
        <div className="nav-bar-and-more">
            <div className='nav-bar'>
                <div className='nav-bar-link' onClick={clickNavBarOption}>
                    <Link label={props.txt1} to={props.link1} >{props.txt1}</Link>
                </div>
                <div className='nav-bar-link' onClick={clickNavBarOption}>
                    <Link label={props.txt2} to={props.link2} >{props.txt2}</Link>
                </div>
                <div className='nav-bar-link' onClick={clickNavBarOption}>
                    <Link label={props.txt3} to={props.link3} >{props.txt3}</Link>
                </div>
                <div className='nav-bar-link logo'>
                </div>
                <div className='nav-bar-link' onClick={clickNavBarOption}>
                    <Link label={props.txt4} to={props.link4} >{props.txt4}</Link>
                </div>
                <div className='nav-bar-link' onClick={clickNavBarOption}>
                <Link label={props.txt5} to={props.link5} >{props.txt5}</Link>
                </div>
                <div className='nav-bar-link' onClick={clickNavBarOption}>
                    <p className='more' onClick={clickMore}>+ MORE</p>
                </div>
            </div>
            {moreToggle ? <MoreMenu moreClickHandler={clickMore}/> : ""} 
        </div> 
    )
}
