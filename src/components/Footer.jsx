import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* LEFT SIDE */}
        <div className="mb-3 mb-md-0 text-center text-md-start">
          © {new Date().getFullYear()} Percy Osunde
          <br />
          <span className="text-muted">
            Built with React, GraphQL, and modern web technologies
          </span>
        </div>

        {/* RIGHT SIDE (ICONS) */}
        <div className="d-flex gap-4 fs-4">
          <a
            href="https://github.com/percyosag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/percy-osag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:percybuilder@gmail.com" className="text-light">
            <FaEnvelope />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
