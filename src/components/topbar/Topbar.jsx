import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Reactsocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <NavLink className={"navLink"} to={"./"}>
            <span className="topbarLink">Home</span>
          </NavLink>
          <NavLink className={"navLink"} to={"./Profile"}>
            <span className="topbarLink">Profile</span>
          </NavLink>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="./assets/person/1.jpeg" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
