import { Users } from "../../dummyData";
import Online from "../online/Online";
import './homeRightbar.css'

function HomeRightbar() {
  return (
    <>
      <div className="birthdayContainer">
        <img src="assets/gift.png" className="birthdayImg" />
        <span className="birthdayText">
          <b> Armen Gevorgyan </b> and <b>3 other friends</b> have a birthday
          today.
        </span>
      </div>
      <img src="assets/ad.png" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} users={u} />
        ))}
      </ul>
    </>
  );
}

export default HomeRightbar;
