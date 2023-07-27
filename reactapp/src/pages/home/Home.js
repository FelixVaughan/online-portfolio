import Profile from "../../components/profile/Profile";
import profileData from "../../data/profile";
import profilePic from "../../assets/profile.jpg";
import "./home.css";
export default function Home() {
  return (
    <div classname="container">
      <div classname="header-section">
        <Profile bio={profileData.bio} image={profilePic} />;
      </div>
      <hr />
      <div className="description-section">{profileData.info}</div>
    </div>
  );
}
