import React from 'react'

export default function AdminButton({ buttonHandler, buttonText }) {
    return (
        <div>
            <button onClick={buttonHandler}>
                {buttonText}
            </button>
        </div>
    )
}
