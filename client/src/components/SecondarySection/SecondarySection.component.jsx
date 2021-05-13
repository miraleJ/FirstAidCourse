import React from 'react'
import './SecondarySectionStyle.css'
import HighlightCircleWithText from '../HighlightCircleWithText/HighlightCircleWithText.component'

export default function SecondarySection() {
    return (
        <div className='secondary-section'> 
            <HighlightCircleWithText className='highlight-circle-with-text'
            pic="https://images.unsplash.com/photo-1583254447142-b47f12dd4f80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            title="Babies and Children CPR Course"
            text="You want to know what to do when your kid will need you.
            This course will guide you step by step in day to day health situations." 
            btnLink="https://firstaidwithkate.com.au/" />
            <HighlightCircleWithText className='highlight-circle-with-text'
            pic="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
            title="Blog Post"
            text="פעם כשהייתי סטודנט אחת האחיות לימדה אותי משהו שמלווה אותי מאז ועד היום.
            היא קיבלה ילדה שהייתה נראית די גרוע (לא בקטע אסטתי) 😨
            כלומר חולה...
            מצטמררת, קוטיס ('עור שיש'), חיוורת וכאלה. 
            ובמקום לגרום לזה שהיא תדורג דחופה ותעמיס עומס נוסף על הרופאים -
            היא פשוט טיפלה בה, ושינתה!"
            btnLink="https://www.facebook.com/amir.yosman.3/posts/10164935886135386" />
            <HighlightCircleWithText className='highlight-circle-with-text'
            pic="https://images.unsplash.com/photo-1488219435247-cd511605cf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1613&q=80" 
            title="Course"
            text="Are you a teacher? A tour guide? Need to refresh your knowledge about PCR and to be ready in real life cases? - We have the right course for you!" 
            btnLink="https://www.udemy.com/" />
        </div>
    )
}
