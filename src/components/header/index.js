import React from 'react';

import { Link } from "react-router-dom";

import './styles.css';


function Header({ pages }) {

  return (
    <div className="container">
      <header>
        <ul>
          {pages.map(page => (
            <li key={page.title}>
              <Link to={page.url}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default Header;
