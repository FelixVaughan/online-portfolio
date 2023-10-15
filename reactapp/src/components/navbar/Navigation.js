import { useEffect, useState } from "react";
import "./navigation.css";

export default function Navigation() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${showBackground ? "show-bg" : ""}`}>
      <div className="nav-flex-container">
        <div className="nav-items-container">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
