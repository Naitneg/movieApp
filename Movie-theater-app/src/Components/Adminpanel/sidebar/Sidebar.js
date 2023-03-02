import "./sidebar.css";
import { RiDashboardFill } from "react-icons/ri";
import { FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { BiMoviePlay,BiHomeAlt } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import {
  MdOutlineNotificationsActive,
  MdHealthAndSafety,
} from "react-icons/md";
import { SiLogstash } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar3">
      <div className="top3">
        <Link to="/admin" style={{textDecoration: "none"}}>
          <span className="logo3">MOVIE ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center3">
        <ul>
          <p className="title3">MAIN</p>
          <Link to="/admin" style={{textDecoration: "none"}}>
          <li>
            <RiDashboardFill className="icon3" />
            <span className="span1">Dashboard</span>
          </li>
          </Link>
          <p className="title3">LISTS</p>
          <Link to="/admin/users" style={{textDecoration: "none"}}>
          <li>
            <FiUsers className="icon3" />
            <span className="span1">Users</span>
          </li>
          </Link>
          <Link to="/admin/movies" style={{textDecoration: "none"}}>
          <li>
            <BiMoviePlay className="icon3" />
            <span className="span1">Movies</span>
          </li>
          </Link>
          <p className="title3">NEWS</p>
          <li>
            <ImStatsBars className="icon3" />
            <span className="span1">Stats</span>
          </li>
          <li>
            <MdOutlineNotificationsActive className="icon3" />
            <span className="span1">Notifications</span>
          </li>
          <p className="title3">SYSTEM CARE</p>
          <li>
            <MdHealthAndSafety className="icon3" />
            <span className="span1">System Health</span>
          </li>
          <li>
            <SiLogstash className="icon3" />
            <span className="span1">Logs</span>
          </li>
          <li>
            <FiSettings className="icon3" />
            <span className="span1">Settings</span>
          </li>
          <p className="title3">ADMIN</p>
          <li>
            <CgProfile className="icon3" />
            <span className="span1">Profile</span>
          </li>
          <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <BiHomeAlt className="icon3" />
            <span className="span1">Home </span>
          </li>
          </Link>
          <li>
            <FiLogOut className="icon3" />
            <span className="span1">Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
