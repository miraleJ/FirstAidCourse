import React from 'react'
import './HighlightIn2CirclesStyle.css'


export default function HighlightIn2Circles({ title, text, picture }) {
    return (
        <div className='highlight-in-2-circles' >
            {/* back circle */}
            <div className="back-circle" >
                aaa
             {/* style={
                // {background: `url(${picture})`}}> */}
            </div>
            {/* front circle */}
            <div className="front-circle">
                <h3 className="highlight-title">TIP:</h3>
                <p className="highlight-txt">Be safe! Be safe!</p>
            </div>
        </div>
    )
}
