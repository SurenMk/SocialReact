import './profileFriend.css'

function ProfileFriend({user}) {
  return (
    <div className="rightbarFollowing">
      <img src={user.profilePicture} className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">{user.username}</span>
    </div>
  );
}

export default ProfileFriend;
