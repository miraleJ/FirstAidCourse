import React from 'react'
import './HighlightCircleWithTextStyle.css'

export default function HighlightCircleWithText(props) {
    return (
        <div>
            {console.log("")}
            <div className="highlight-circle"
                style={{
                    background: `url(${props.pic}) no-repeat center`,
                    backgroundSize: '150%'
                    }}
            ></div>
            <h4 className="highlight-title">{props.title}</h4>
            <p className="highlight-text">{props.text}</p>
        </div>
    )
}
