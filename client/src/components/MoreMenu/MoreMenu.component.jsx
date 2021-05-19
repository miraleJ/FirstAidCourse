import React from 'react'
import './MoreMenuStyle.css'

export default function MoreMenu({ moreClickHandler }) {
    return (
        <div className="more-menu" onClick={moreClickHandler}>
            <p>CONTACT US</p>
            <br />
            <p>LOG IN</p>
        </div>
    )
}
