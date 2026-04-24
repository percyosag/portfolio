import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="fw-bold mb-4">About Me</h1>

          <p className="lead text-muted">
            I am a full-stack developer focused on building practical web
            applications with clean user interfaces, reliable backend services,
            and modern deployment workflows.
          </p>

          <p>
            My work includes React frontends, Node.js and GraphQL APIs, MongoDB
            databases, authentication flows, micro-frontend architecture,
            AI-powered features, and CI/CD pipelines.
          </p>

          <p>
            I enjoy building systems that are easy to use, easy to explain, and
            structured well enough to grow over time.
          </p>

          <Card className="mt-4 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold">Technical Focus</h5>
              <ul className="mb-0">
                <li>Frontend development with React and Vite</li>
                <li>Backend development with Node.js, Express, and GraphQL</li>
                <li>Database design with MongoDB</li>
                <li>Cloud deployment and CI/CD workflows</li>
                <li>AI features using retrieval and document-based review</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
