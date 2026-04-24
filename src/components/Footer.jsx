import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-1">© {new Date().getFullYear()} Percy Osunde</p>

        <p className="mb-2">
          Built with React, GraphQL, and modern web technologies
        </p>

        <div>
          <a
            href="https://github.com/percyosag"
            target="_blank"
            className="text-light me-3"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/percy-osag"
            target="_blank"
            className="text-light me-3"
          >
            LinkedIn
          </a>

          <a href="mailto:percybuilder@gmail.com" className="text-light">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
