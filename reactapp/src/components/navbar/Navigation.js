import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navigation.css";

export default function Navigation() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        // Change 100 to the desired scroll height
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
    <Navbar
      className={`nav-container ${showBackground ? "show-bg" : ""}`}
      expand="lg"
    >
      <Container>
        <Nav className="me-auto nav-items-container">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
