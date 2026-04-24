import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="fw-bold mb-3">Contact</h1>

          <p className="text-muted mb-4">
            I am open to software development opportunities, internships,
            collaboration, and project discussions.
          </p>

          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-grid gap-3">
                <Button
                  href="mailto:percybuilder@gmail.com"
                  variant="primary"
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <FaEnvelope />
                  Email Me
                </Button>

                <Button
                  href="https://github.com/percyosag"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-dark"
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </Button>

                <Button
                  href="https://www.linkedin.com/in/percy-osag"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-primary"
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <FaLinkedin />
                  LinkedIn
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
