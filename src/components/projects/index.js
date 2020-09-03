import React from 'react';
import './styles.css';
import Imageone from './image/pintura1.jpg';
import Imagetwo from './image/pintura2.jpg';
import Imagethree from './image/pintura3.jpg';
import Imagefour from './image/pintura4.jpg';
import Imagefive from './image/pintura5.jpg';
import Imagesix from './image/pintura6.jpg';
import Imageseven from './image/pintura7.jpg';
import Imageeight from './image/pintura8.jpg';
import Imagenine from './image/pintura9.jpg';


const Projects = () => {
    return (
        <div className="container-projects">
            <div className="column-projects">
                <div className="projects">
                    <img src={Imageone} alt="images" />
                </div>
                <div className="projects">
                    <img src={Imagetwo} alt="images" />
                </div>
                <div className="projects">
                    <img src={Imageseven} alt="images" />
                </div>
            </div>
            <div className="column-projects">
                <div className="projects">
                    <img src={Imagethree} alt="images" />
                </div>
                <div className="projects">
                    <img src={Imagefour} alt="images" />
                </div>
                <div className="projects">
                    <img src={Imageeight} alt="images" />
                </div>
            </div>
            <div className="column-projects">
                <div className="projects">
                    <img src={Imagefive} alt="images" />
                </div>
                <div className="projects">
                    <img src={Imagesix} alt="images" />
                </div>
                <div className="projects">
                    <img src={Imagenine} alt="images" />
                </div>
            </div>
        </div>
    )
}

export default Projects;