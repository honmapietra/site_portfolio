import React from 'react';
import './styles.css';
import Image from './image/dudaicon.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="icon-div">
                <img src={Image} alt="icon-img" />
            </div>
            <div className="box-description">
            </div>
        </div>
    )
}
export default About;