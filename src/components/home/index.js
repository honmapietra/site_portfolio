import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="Home">
            <div className="image-leave">
                <div className="HomeText">
                    <h2>Duda Nas é uma artista visual focada em pinturas
                    <p>Ela ama contar histórias e passar inspiração   </p>
                        <p>através de cores fortes e personagens marcantes</p>
                        <p>Para mais sobre ela:</p></h2>

                    <Link to="/about"> <button className="btn-about"><h3>MAIS SOBRE</h3>  </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;