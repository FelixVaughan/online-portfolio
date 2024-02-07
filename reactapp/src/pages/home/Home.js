import Button from "@mui/material/Button";
import React from "react";
import Typewriter from "typewriter-effect";
import image from "../../assets/transparent-profile.png";
import "./home.css";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="header-section">
        <div className="profile-container">
          <img src={image} alt="profile" className="profile-picture" />
          <div className="profile-header">
            <Typewriter
              options={{
                autoStart: true,
                delay: 50,
                cursor: "_",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Greetings, I'm Felix!")
                  .pauseFor(250)
                  .typeString(
                    "<br>A young Software Developer driven by a passion for innovation and a vision to create groundbreaking technologies that help shape the future."
                  )
                  .pauseFor(300)
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div className="button-section">
        <Button
          id="resume-button"
          variant="contained"
          href={`/${encodeURIComponent("Felix Resume.pdf")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ outline: "none" }}
        >
          Resume
        </Button>
      </div>
    </div>
  );
}
