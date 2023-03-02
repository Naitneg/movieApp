import React from 'react'
import "./widget.css";
import {MdMonetizationOn,MdAccountBalance} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineArrowUp} from "react-icons/ai"


const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <BsFillPersonFill
            className="icon4"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MdMonetizationOn
            className="icon4"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <MdAccountBalance
            className="icon4"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget4">
      <div className="left4">
        <span className="title4">{data.title}</span>
        <span className="counter4">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link4">{data.link}</span>
      </div>
      <div className="right4">
        <div className="percentage4 positive">
          <AiOutlineArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;