import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div className="social-link">
                    <li><i href="" className="fa fa-facebook" arial-hidden="true"></i></li>
                    <li><i href="" className="fa fa-twitter-square" arial-hidden="true"></i></li>
                    <li><i href="" className="fa fa-instagram" arial-hidden="true"></i></li>
                </div>
                <input type="text" placeholder="Email Address"/>
                <button type="submit">Subscribe</button>
            </div>
            <p className="copyright">&copy;2016 Sarah Holden</p>
        </footer>
        
    );
};

export default Footer;
