import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="Home">
            <div className="image-leave">
                <div className="HomeText">
                    <h2> Duda Nas Art </h2>
                    <h3>Artista Visual</h3>
                    <Link to="/about"> <button className="btn-about"><p>MAIS SOBRE</p>  </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;