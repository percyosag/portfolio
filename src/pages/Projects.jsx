import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
const projects = [
  {
    title: "ApexCommerce — Full-Stack MERN Ecommerce Platform",
    description:
      "Full-stack MERN ecommerce platform for a luxury fragrance store, built with React, Redux Toolkit, RTK Query, Node.js, Express, MongoDB, and JWT authentication using HTTP-only cookies. The app includes product browsing, search, pagination, cart and checkout flow, PayPal Sandbox payments with server-side capture, order history, purchased-only reviews, admin product/user/order management, image uploads, Render/Vercel deployment, and SonarQube Cloud quality analysis.",
    tech: [
      "React",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT + HTTP-only Cookies",
      "PayPal REST API",
      "Render",
      "Vercel",
      "SonarQube Cloud",
    ],
    github: "https://github.com/percyosag/ApexCommerce-mern",
    demo: "https://apex-commerce-mern.vercel.app",
  },
  {
    title: "DevPilot 2026 (Micro-Frontend Platform)",
    description:
      "Built a scalable micro-frontend system with a React shell and multiple remote apps using Module Federation. Integrated an Apollo Gateway to unify GraphQL services for authentication and project management. Implemented session-based authentication and dynamic user state across services.",
    tech: ["React", "Vite", "GraphQL", "Apollo Gateway", "MongoDB"],
    github: "https://github.com/percyosag/Group-4_COMP308Lab3",
    demo: "#",
  },
  {
    title: "AI Review System (RAG Pipeline)",
    description:
      "Designed an AI-powered review system using a Retrieval-Augmented Generation (RAG) pipeline. Implemented document chunking, embeddings, and FAISS vector search to generate grounded responses with citations for draft validation.",
    tech: ["LangChain", "FAISS", "Node.js", "AI", "Embeddings"],
    github: "https://github.com/percyosag/Group-4_COMP308Lab3",
    demo: "",
  },
  {
    title: "CI/CD Pipeline with Azure DevOps",
    description:
      "Built a full CI/CD pipeline using Azure DevOps to automate build, test, and deployment processes. Integrated code quality checks, unit testing, and artifact generation for a full-stack application.",
    tech: ["Azure DevOps", "CI/CD", "Node.js", "Testing"],
    github: "https://github.com/percyosag/comp367-devops-project",
    demo: "#",
  },
];
function Projects() {
  return (
    <Container className="py-5">
      <h1 className="fw-bold text-center mb-3">Projects</h1>
      <p className="text-muted text-center mb-5">
        A collection of full-stack, cloud, and AI-focused projects I have built.
      </p>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{project.title}</Card.Title>

                <Card.Text className="text-muted">
                  {project.description}
                </Card.Text>

                <div className="mb-3">
                  {project.tech.map((item, i) => (
                    <Badge bg="primary" className="me-2 mb-2" key={i}>
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="d-flex gap-2">
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>

                  {project.demo && project.demo !== "#" && (
                    <Button
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
