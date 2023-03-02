import React, { useState } from "react";
import { FaTh, FaBars, FaCheck, FaUserLock } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { user } = useContext(AuthContext);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/movies",
      name: "Movies",
      icon: <GiPopcorn />,
    },
    {
      path: "/Booking",
      name: "Booking",
      icon: <FaCheck />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Cinema
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {user && user.isadmin && (
          <NavLink to="/admin" className="link">
            <div className="icon">{<FaUserLock />}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              AdminPanel
            </div>
          </NavLink>
        )}
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
