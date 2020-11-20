import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser } from '../actions/aActiveUser';



const Nav = (props) => {

  // If user is logged in, show Nav, otherwise show link to Sign in only
  if (props.activeUser.username !== undefined) {

    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/Browse">Browse</Link>
            </li>
            <li>
              <Link to="/Recommended">Recommended</Link>
            </li>
            <li>
              <Link to="/UserProfile">Profile</Link>
            </li>
            <li>
              <Link to="/" onClick={() => props.dispatch(logInUser(undefined))}>Logout</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  } 
  else {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Sign In</Link>
          </li>
        </ul>
      </nav>
    );
  }
};
export default connect((state) => ({ activeUser: state.activeUser }))(Nav);
