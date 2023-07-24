import "./profile.css";

export default function Profile({ image, bio }) {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={image} width={3024} height={4024} alt="profile.jpg" />
      </div>
      <div className="profile-header">
        <p>{bio}</p>
      </div>
    </div>
  );
}
