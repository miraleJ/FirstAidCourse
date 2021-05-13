import React from 'react'
import './HighlightIn2CirclesStyle.css'


export default function HighlightIn2Circles({ title, text, picture }) {
    return (
        <div className='highlight-in-2-circles' >
            {/* back circle */}
            <div className="back-circle" style={{background: `url("https://images.unsplash.com/photo-1611764461465-09162da6465a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80") no-repeat center`,
            backgroundSize: '100%'}}>
            </div>
            {/* front circle */}
            <div className="front-circle">
                <h3 className="highlight-title">TIP:</h3>
                <p className="highlight-txt">Be safe!</p>
            </div>
        </div>
    )
}
