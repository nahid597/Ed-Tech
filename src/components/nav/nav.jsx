import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

function NavComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ cursor: "pointer" }} href="/">
          <Image height="30px" src="http://localhost:3000/education.png" roundedCircle />
          Ed-Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/liveclass">Live Class</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/courses/web">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses/marketing">
                Business and Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses/dataengineering">
                Data Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="/courses/higherstudy">
                Higher Study
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
          <Nav.Link href="/login">
          <Button variant="outline-info">Login</Button>
          </Nav.Link>
          <Nav.Link href="/signup">
          <Button variant="outline-info">SignUp</Button>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
