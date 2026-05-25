import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center min-vh-75">
        <Col md={7}>
          <p className="text-primary fw-semibold mb-2">
            Full-Stack Software Developer
          </p>

          <h1 className="display-4 fw-bold">Hi, I’m Percy Osunde</h1>

          <p className="lead text-muted mt-3">
            I build full-stack web applications using React, Node.js, Spring
            Boot, GraphQL, MongoDB, PostgreSQL, and cloud deployment tools.
          </p>

          <div className="d-flex gap-3 mt-4">
            <Button as={Link} to="/projects" variant="primary">
              View Projects
            </Button>

            <Button as={Link} to="/contact" variant="outline-dark">
              Contact Me
            </Button>
          </div>
        </Col>

        <Col md={5} className="mt-5 mt-md-0">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h5 className="fw-bold">Current Focus</h5>
            <p className="mb-2">React + Node.js</p>
            <p className="mb-2">Spring Boot + REST APIs</p>
            <p className="mb-2">GraphQL + Apollo Federation</p>
            <p className="mb-0">MongoDB + PostgreSQL</p>
            <p className="mb-0">Cloud Deployment + CI/CD </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
