import React from 'react';
import './styles.css';

const Contacts = () => {
    return (
        <div className="container-social">
            <div className="box-contact">
                <h2>Fique a vontade para entrar em contato</h2>

            </div>
            <div className="redes_sociais">
                <div className="redes-sociais_instagram rede-social">
                    <a href="https://instagram.com/dudanasart">

                        <p>Instagram</p>
                        <p>/dudanasart</p>
                    </a>
                </div>
                <div className="redes-sociais_email rede-social">


                    <p>E-mail</p>
                    <p>dudanasart@contato.com</p>

                </div>
                <div className="redes-sociais_facebook rede-social">
                    <a href="https://facebook.com/dudanasart">

                        <p>Facebook</p>
                        <p>/dudanasart</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;