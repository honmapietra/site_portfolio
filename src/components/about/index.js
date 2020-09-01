import React from 'react';
import './styles.css';
import image from './image/dudaicon.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="icon-div"> <img src={image} /></div>
            <div className="box-description">
                <h3>SOBRE MIM</h3>
                <p>vou escr3ever qualquer coisa aleatorioa porque eu só quero</p>
            </div>
        </div>
    )
}
export default About;