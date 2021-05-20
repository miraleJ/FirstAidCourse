import React from 'react'
import './BlogPageStyle.css'


export default function BlogPage() {

    return (
        <div className='blog-page page'>
            <div>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Famir.yosman.3%2Fposts%2F10164848699865386&show_text=true&width=800" width="500" height="666" style={{border: "none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10164127742210386%26set%3Da.220594240385%26type%3D3&show_text=true&width=500" width="500" height="666" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Famir.yosman.3%2Fposts%2F10164935886135386&width=800&show_text=true&height=666&appId" width="800" height="666" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    )
}
