import { Container, Nav, Navbar } from "react-bootstrap";
import "./navigation.css";

export default function Navigation() {
  return (
    <Navbar className="nav-container" expand="lg">
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
