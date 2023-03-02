import React from "react";
import "./footer.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>MOVIES</h4>
            <ul className="list-unstyled">
              <li>Film program</li>
              <li>Coming Soon</li>
              <li>Trailer</li>
            </ul>
          </div>
          <div className="col">
            <h4>EVENTS</h4>
            <ul className="list-unstyled">
              <li>Current events</li>
              <li>Archive</li>
            </ul>
          </div>
          <div className="col">
            <h4>FOLLOW US</h4>
            <ul className="list-icon">
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
