import React, { useContext } from "react";
import { AuthContext } from "../../Components/context/AuthContext";
import "./Profilpage.css";
import Navbar from "../../Components/navbar/NavBar";
import Header from "../ConcessionsPages/Header";

function Profilpage() {
  const { user } = useContext(AuthContext);
  return (
    <Navbar>
      <Header />
      <div className="wrapper1">
        <div className="main1">
          <div className="form-container1">
            <div className="img">
              <img alt="foto" src={`https://robohash.org/${user.id}`} />
            </div>
            <div className="shkrimi">
              <p className="personal">PERSONAL INFORMATION</p>
              <p>
                <span className="credentials">Name : </span>
                <span className="cred">{user.username}</span>
              </p>
              <p>
                <span className="credentials">Email : </span>
                <span className="cred">{user.email}</span>
              </p>
              <p>
                <span className="credentials">Registered : </span>
                <span className="cred">{user.joined.substring(0, 10)}</span>
              </p>
            </div>
            <div className="shkrimi">
              <p className="personal">EVENTS</p>
              <p>
                <span className="credentials">Favorite movie : </span>
                <span className="cred">...</span>
              </p>
              <p>
                <span className="credentials">Tickets : </span>
                <span className="cred">...</span>
              </p>
              <p>
                <span className="credentials">Events : </span>
                <span className="cred">...</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="personal">ADRESA</p>
              <p>
                <span className="credentials">STREET : </span>
                <span className="cred">Rr. "Fadil Deliqi"</span>
              </p>
              <p>
                <span className="credentials">CITY : </span>
                <span className="cred">Mitrovicë</span>
              </p>
              <p>
                <span className="credentials">POSTAL CODE : </span>
                <span className="cred"> 40000 </span>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Navbar>
  );
}

export default Profilpage;
