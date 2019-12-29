import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/autos" className="nav-link active">Легковые</Link>
      </li>
      <li className="nav-item">
        <Link to="/special" className="nav-link disabled" tabIndex="-1" aria-disabled="true">Грузовые</Link>
      </li>
      <li className="nav-item">
        <Link to="/special" className="nav-link disabled" tabIndex="-1" aria-disabled="true">Спец. Техника</Link>
      </li>
      <li className="nav-item">
        <Link to="/insize" className="nav-link">Поиск по размерам</Link>
      </li>
    </ul>
  )
}

export default Header;
