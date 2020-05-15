import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import './Header.css'

const Header = (props) => {
  console.log(props);

  const handleLogOut = () => {
    axios
      .get("/auth/logout")
      .then((res) => {
        props.getUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="header">
      <div>
        <Link className='header-logo' to='/'>
          <img alt='header-logo' width='100' src='https://cdn.dribbble.com/users/3638706/screenshots/10188432/db2-01.jpg' />
          <h4>LEE'S REAL ESTATE</h4>
        </Link>
      </div>
      {!props.store.user.user.email ? (
        <>
        <div className='register-login'>
          <Link className='register-container' to="/register">Register</Link>
          <Link className='login-container' to="/login">Login</Link>
        </div>
        </>
      ) : (
        <>
          <Dropdown className='header-dropdown'>
            <Dropdown.Toggle className='header-user-email' variant="success" id="dropdown-basic">
              {props.store.user.user.email} ▾ <img width='20' src='https://image.flaticon.com/icons/svg/2919/2919573.svg'/>
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-menu'>
              <Link className='dropdown-item' to='/wishlist'>Favorites</Link>
              <Dropdown.Item className='dropdown-item' onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (stateRedux) => {
  const { user } = stateRedux;
  return {
    store: {
      user,
    },
  };
};

export default connect(mapStateToProps, { getUser })(Header);
