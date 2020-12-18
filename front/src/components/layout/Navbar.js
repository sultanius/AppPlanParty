import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
import { Fragment } from 'react';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

  const authLinks = (
    <ul>
        <li>
          <Link to="/profile">NAME</Link>
          <Link to="/newparty">Add party</Link>
          <Link to="/myparties">My parties</Link>
          <a onClick ={logout} href="/">
            <span className="hide-sm">Log Out</span></a>
        </li> 
    </ul>
  );


    const guestLinks = (
      <ul>
        <li>
          <Link to="/register">Sign Up</Link>
          </li>
        <li>
          <Link to="/login">Login</Link>
          </li>
      </ul>
    ); 

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"> App-Plan-Party</Link>
      </h1>
  { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>) }
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);
