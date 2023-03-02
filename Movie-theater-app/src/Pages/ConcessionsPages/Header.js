import React, { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/context/AuthContext";

function Header() {
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();
  const deleteuser = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/");
  };
  return (
    <div className="header">
      <Link to="/">
        <h3 className="header-h1">Movie Cinema</h3>
      </Link>
      {user ? (
        <div className="header-right-SignUp useri">
          <Link to="/profile" className="name">
            {user.username}
          </Link>
          <button className="button-18" onClick={deleteuser}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="header-right">
          <div className="header-right-SignUp">
            <Link to="/SignUp">
              <h3>Sign up</h3>
            </Link>
          </div>
          <div className="header-right-login">
            <Link to="/Login">
              <h3>Login</h3>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
