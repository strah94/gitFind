import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// props moze i
// const Navbar=({icon,title})=>{}

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

//Ovako se u funkciji definisu defaultProps i propTypes(ime funkcije. i idu ispod funkcije)

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
