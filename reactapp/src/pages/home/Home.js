import Button from "@mui/material/Button";
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
              Greetings, I'm Felix!
              <br />A young full-stack developer driven by a passion for
              innovation and a vision to create groundbreaking technologies that
              shape the future.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="description-section">
        <Button
          id="resume-button"
          variant="contained"
          href="#contained-buttons"
        >
          Resume
        </Button>
      </div>
    </div>
  );
}
