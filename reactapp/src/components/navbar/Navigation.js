import { Container, Nav, Navbar } from "react-bootstrap";
import "./navigation.css";
export default function Navigation() {
  return (
    <Navbar bg="light nav-container" data-bs-theme="light" expand="lg">
      <Container>
        <Nav className="me-auto nav-items-container">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projecrs">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
