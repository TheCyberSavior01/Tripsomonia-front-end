import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcManager } from "react-icons/fc";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div className="header-link-group">
        <Link className="header-link" to="/">
          News
        </Link>
        <Link className="header-link" to="/">
          Blog
        </Link>
        <Link className="header-link" to="/">
          Contact
        </Link>

        {user ? (
          <div className="user-info">
            <button className="login-btn" onClick={handleLogOut}>
              Logout
            </button>
            <div className="user-profile">
            <FcManager classname="user-icon"/>
              <p className="user-text">{user.displayName}</p>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
