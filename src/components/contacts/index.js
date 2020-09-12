
import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts = () => {
    return (
        <div className="container-social">
            <div className="box-contact">
                <h1>Fique a vontade para entrar em contato </h1>
            </div>
            <div className="redes_sociais">
                <div className="redes-sociais_instagram rede-social">
                    <a href="https://instagram.com/dudanasart" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon-social" icon={['fab', 'instagram']} />
                        <h2>Instagram</h2>
                    </a>
                </div>
                <div className="redes-sociais_email rede-social">
                    <FontAwesomeIcon className="icon-social" icon={['fas', 'envelope-open-text']} />
                    <h2>E-mail</h2>
                </div>
            </div>
            <div className="redes_sociais">
                <div className="redes-sociais_facebook rede-social">
                    <a href="https://facebook.com/dudanasart" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon-social" icon={['fab', 'facebook']} />
                        <h2>Facebook</h2>
                    </a>
                </div>
                <div className="redes-sociais_whatsapp rede-social">
                    <a href="https://api.whatsapp.com/send?phone=55554884401740" target="_blank" rel="noopener noreferrer">

                        <FontAwesomeIcon className="icon-social" icon={['fab', 'whatsapp']} />
                        <h2>WhatsApp</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;