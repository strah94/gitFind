import React from 'react';
import PropTypes from 'prop-types';

// props moze i
// const Navbar=({icon,title})=>{}

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
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
