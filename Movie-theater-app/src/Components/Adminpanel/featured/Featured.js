import "./featured.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {AiOutlineArrowUp,AiOutlineArrowDown} from "react-icons/ai";
import {MdMoreVert} from "react-icons/md";


const Featured = () => {
  return (
    <div className="featured2">
      <div className="top2">
        <h1 className="title2">Total Revenue</h1>
        <MdMoreVert fontSize="large" />
      </div>
      <div className="bottom2">
        <div className="featuredChart2">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title2">Total sales made today</p>
        <p className="amount2">$420</p>
        <p className="desc2">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary2">
          <div className="item2">
            <div className="itemtitle2">Target</div>
            <div className="itemResult2 negative">
              <AiOutlineArrowDown fontSize="small"/>
              <div className="resultAmount2">$12.4k</div>
            </div>
          </div>
          <div className="item2">
            <div className="itemtitle2">Last Week</div>
            <div className="itemResult2 positive">
              <AiOutlineArrowUp fontSize="small"/>
              <div className="resultAmount2">$12.4k</div>
            </div>
          </div>
          <div className="item2">
            <div className="itemtitle2">Last Month</div>
            <div className="itemResult2 positive">
              <AiOutlineArrowUp fontSize="small"/>
              <div className="resultAmount2">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;