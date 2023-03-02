import React from "react";
import Chart from "../../Adminpanel/chart/Chart";
import Featured from "../../Adminpanel/featured/Featured";
import Navbar from "../../Adminpanel/navbar/Navbar";
import Sidebar from "../../Adminpanel/sidebar/Sidebar";
import Widget from "../../Adminpanel/widget/Widget";
import List from "../../Adminpanel/table/Table";

import "./home.css";

function Home() {
  return (
    <div className="home1">
      <Sidebar />
      <div className="home-container1">
        <Navbar />
        <div className="widgets1">
          <Widget type="user" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts1">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer1">
          <div className="listTitle1">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Home;
