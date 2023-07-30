import image from "../../assets/profile.jpg";
import "./home.css";
export default function Home() {
  return (
    <div classname="container">
      <div classname="header-section">
        <div className="profile-container">
          <div className="profile-picture">
            <img src={image} width={3024} height={4024} alt="profile.jpg" />
          </div>
          <div className="profile-header">
            <p>
              Greetings, I'm Felix;
              <br />
              An Aspiring young professional embarking on an exciting journey
              driven by a passion for innovation and a vision to create
              groundbreaking advancements that shape the future.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="description-section"></div>
    </div>
  );
}
