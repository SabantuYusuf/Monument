import React from 'react';

function Nav() {
    return (
        <nav>
            <a className="humburger" href="">
                <i className="fa fa-bar"></i>
            </a>
            
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
		    </ul>
        </nav>
    );
};

export default Nav;
