import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";



const Button = () => {
    return (
        <Link to="/about"> <button className="btn-about"><p>SOBRE</p>  </button>
        </Link>
    )
}
export default Button;