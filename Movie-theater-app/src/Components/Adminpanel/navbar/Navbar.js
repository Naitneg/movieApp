import "./navbar.css";
import { AiOutlineSearch, AiOutlineUnorderedList } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChatLeft } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar12">
      <div className="wrapper12">
        <div className="search12">
          <input className="inputi12" type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <div className="items12">
          <div className="item12">
            <MdLanguage className="iconi12" />
            English
          </div>
          <div className="item12">
            <IoMdNotificationsOutline className="iconi12" />
            <div className="counter12">1</div>
          </div>
          <div className="item12">
            <BsChatLeft className="iconi2" />
            <div className="counter12">2</div>
          </div>
          <div className="item12">
            <AiOutlineUnorderedList className="iconi12" />
          </div>
          <div className="item12">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg"
              alt=""
              className="avatar12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
