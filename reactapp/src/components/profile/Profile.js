import React, { useRef, useState, useEffect } from "react";
import LavaAnimation from "../lavaAnimation/LavaAnimation";
import "./profile.css";

export default function Profile({ image, bio }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [containerRef]);

  const { width, height } = dimensions;
  console.log(width, height);

  return (
    <div className="profile-container" ref={containerRef}>
      {/* <LavaAnimation width={width} height={height} ballSizeFactor={0.5} /> */}
      <div className="profile-picture">
        <img src={image} width={3024} height={4024} alt="profile.jpg" />
      </div>
      <div className="profile-header">
        <p>{bio}</p>
      </div>
    </div>
  );
}
