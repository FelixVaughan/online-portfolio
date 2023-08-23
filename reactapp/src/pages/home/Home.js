import image from "../../assets/transparent-profile.png";
import "./home.css";
export default function Home() {
  return (
    <div classname="container">
      <div classname="header-section">
        <div className="profile-container">
          <div className="profile-picture">
            <img src={image} alt="profile.jpg" />
          </div>
          <div className="profile-header">
            <p>
              Greetings, I'm Felix;
              <br />
              An young professional embarking on an driven by a passion for
              innovation and a vision to create groundbreaking technologies that
              shape the future.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="description-section"></div>
    </div>
  );
}
