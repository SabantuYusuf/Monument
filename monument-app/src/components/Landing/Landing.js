import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Archive from './Archive/Archive';


function Landing() {
    return (
        <div>
            <Header />
            <Archive />
            <About />
        </div>
    );
};

export default Landing;