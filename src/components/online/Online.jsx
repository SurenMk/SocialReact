import "./online.css";

function Online({users}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={users.profilePicture} className="rightbarProfileImg" />
        <div className="rightbarOnline"></div>
      </div>
      <span className="rightbarUsername">{users.username}</span>
    </li>
  );
}

export default Online;
