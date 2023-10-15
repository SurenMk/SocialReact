import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import ProfileRightbar from "./ProfileRightbar";
import HomeRightbar from "./HomeRightbar";

function Rightbar({ profile }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
