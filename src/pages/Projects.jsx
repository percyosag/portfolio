import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

// const projects = [
//   {
//     title: "DevPilot 2026",
//     description:
//       "A full-stack micro-frontend application using React, GraphQL, Apollo Gateway, MongoDB, and AI review features.",
//     tech: ["React", "GraphQL", "MongoDB", "Apollo", "AI"],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "CI/CD DevOps Project",
//     description:
//       "A cloud-based DevOps project using Azure Pipelines, Node.js, automated builds, tests, and deployment workflow.",
//     tech: ["Azure DevOps", "Node.js", "CI/CD", "GitHub"],
//     github: "#",
//     demo: "#",
//   },
// ];

const projects = [
  {
    title: "DevPilot 2026 (Micro-Frontend Platform)",
    description:
      "Built a scalable micro-frontend system with a React shell and multiple remote apps using Module Federation. Integrated an Apollo Gateway to unify GraphQL services for authentication and project management. Implemented session-based authentication and dynamic user state across services.",
    tech: ["React", "Vite", "GraphQL", "Apollo Gateway", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Review System (RAG Pipeline)",
    description:
      "Designed an AI-powered review system using a Retrieval-Augmented Generation (RAG) pipeline. Implemented document chunking, embeddings, and FAISS vector search to generate grounded responses with citations for draft validation.",
    tech: ["LangChain", "FAISS", "Node.js", "AI", "Embeddings"],
    github: "#",
    demo: "#",
  },
  {
    title: "CI/CD Pipeline with Azure DevOps",
    description:
      "Built a full CI/CD pipeline using Azure DevOps to automate build, test, and deployment processes. Integrated code quality checks, unit testing, and artifact generation for a full-stack application.",
    tech: ["Azure DevOps", "CI/CD", "Node.js", "Testing"],
    github: "#",
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
                  <Button href={project.github} variant="outline-dark">
                    GitHub
                  </Button>
                  <Button href={project.demo} variant="primary">
                    Live Demo
                  </Button>
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
