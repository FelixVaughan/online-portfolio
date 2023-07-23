import "./profile.css";

export default function Profile({ path, data }) {
  <div className="profile-container">
    <div className="profile-picture">
      <img src={path} width={3024} height={4024} alt="profile.jpg" />
    </div>
    <div className="profile-header">{data}</div>
  </div>;
}
