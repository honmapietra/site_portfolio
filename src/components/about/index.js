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
                <h2>About</h2>
                <p className="description">Espiritualidade, identidade, resistência e ancestralidade:
                <br /> Essas são as palavras chaves que podem perfeitamente descrever Duda Nas.
                <br />Duda começou a atuar na carreira de artista independente por volta de 2016
                <br /> e desde então, sua arte tem sido um espelho de suas vivências.
                <br /> Cada retrato é marcado por sua experiência enquanto um corpo negro
                <br /> em uma incessante busca por se encontrar e resgatar suas raízes dentro de uma sociedade eurocêntrica,
                <br />representando isso não de forma individual,mas em uma jornada compartilhada por todos os irmãos e irmãs
                <br />Além disso, busca contribuir com a representatividade negra no campo das artes visuais
                <br /> Produz suas pinturas em tela, MDF ou em papel canson, utilizando tinta acrílica, PVA e guache.</p>
                <div className="info-contact">
                    <h3>Contato:</h3>
                    <p>+55 (48) 8440-1740</p>
                </div>
            </div>
        </div>
    )
}
export default About;