import Button from "@mui/material/Button";
import image from "../../assets/transparent-profile.png";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="header-section">
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
      <div className="button-section">
        <Button
          id="resume-button"
          variant="contained"
          target="_blank"
          style={{ outline: "none" }}
          rel="noopener noreferrer"
          href={`/${encodeURIComponent("Felix Resume.pdf")}`}
        >
          Resume
        </Button>
      </div>
    </div>
  );
}
