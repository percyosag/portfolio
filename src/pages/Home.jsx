import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center min-vh-75">
        <Col md={7}>
          <p className="text-primary fw-semibold mb-2">Full-Stack Developer</p>

          <h1 className="display-4 fw-bold">Hi, I’m Percy Osunde</h1>

          <p className="lead text-muted mt-3">
            I build full-stack web applications using React, Node.js, GraphQL,
            MongoDB, and cloud-based DevOps tools.
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
            <p className="mb-2">React + Micro-Frontends</p>
            <p className="mb-2">GraphQL + Apollo</p>
            <p className="mb-2">MongoDB + Node.js</p>
            <p className="mb-0">Cloud + CI/CD</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
