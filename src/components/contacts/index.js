import React from 'react';
import './styles.css';

const Contacts = () => {
    return (
        <div className="container-social">
            <div className="box-contact">
                <h1>Fique a vontade para entrar em contato</h1>

            </div>
            <div className="redes_sociais">
                <div className="redes-sociais_instagram rede-social">
                    <a href="https://instagram.com/dudanasart">

                        <h2>Instagram</h2>

                    </a>
                </div>
                <div className="redes-sociais_email rede-social">


                    <h2>E-mail</h2>

                </div>
            </div>
            <div className="redes_sociais">
                <div className="redes-sociais_facebook rede-social">
                    <a href="https://facebook.com/dudanasart">

                        <h2>Facebook</h2>
                    </a>
                </div>
                <div className="redes-sociais_whatsapp rede-social">
                    <a href="https://api.whatsapp.com/send?phone=55554884401740">

                        <h2>WhatsApp</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;