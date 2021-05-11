import React from 'react';
import './FooterStyle.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <div className='footer'>
            Copyright © 2021 First Aid with Amir - All Rights Reserved.
            This website was built by Mirale Yosman <a href="https://www.linkedin.com/in/mirale-josman-19070145/"> <AiFillLinkedin className='icon' /> </a> <a href="https://github.com/miraleJ">  <AiFillGithub className='icon' /></a>
        </div>
    )
}
