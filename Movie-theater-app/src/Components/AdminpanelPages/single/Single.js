import React from "react";
import Sidebar from "../../Adminpanel/sidebar/Sidebar";
import Navbar from "../../Adminpanel/navbar/Navbar";
import Chart from "../../Adminpanel/chart/Chart";
import "./single.css";
import List from "../../Adminpanel/table/Table";

function Single() {
  return (
    <div className="single1">
      <Sidebar />
      <div className="singleContainer1">
        <Navbar />
        <div className="top5">
          <div className="left5">
            <div className="editButton1">Edit</div>
            <h1 className="title5">Information</h1>
            <div className="item5">
              <img
                src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
                alt="per"
                className="itemImg5"
              />
              <div className="details5">
                <h1 className="itemTitle5">Jane Doe</h1>
                <div className="detailItem5">
                  <span className="itemKey5">Email:</span>
                  <span className="itemValue5">janedoe@gmail.com</span>
                </div>
                <div className="detailItem5">
                  <span className="itemKey5">Phone:</span>
                  <span className="itemValue5">+38349700700</span>
                </div>
                <div className="detailItem5">
                  <span className="itemKey5">Address:</span>
                  <span className="itemValue5">Rr."Fadil Deliqi"</span>
                </div>
                <div className="detailItem5">
                  <span className="itemKey5">Country:</span>
                  <span className="itemValue5">Kosovë</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right5">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom5">
        <h1 className="title5">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default Single;
