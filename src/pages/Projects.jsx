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
    title: "Spring Boot Ecommerce API — Java Backend REST API",
    description:
      "Backend ecommerce REST API built with Java 21, Spring Boot, PostgreSQL, Spring Security, JWT authentication, role-based authorization, Swagger/OpenAPI, and Azure DevOps CI. The API includes product and category management, user registration/login, authenticated cart operations, shipping address management, order creation, payment status handling, admin order controls, DTO-based request/response design, validation, global error handling, and service-layer unit tests.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Spring Data JPA",
      "Hibernate",
      "Swagger/OpenAPI",
      "JUnit 5",
      "Mockito",
      "Maven",
      "Azure DevOps CI",
      "Render",
    ],
    github: "https://github.com/percyosag/springboot-ecommerce-api",
    demo: "https://springboot-ecommerce-api.onrender.com/swagger-ui/index.html",
  },
  {
    title:
      "AI-Powered Federated Project Review Platform — Micro Frontends & GraphQL",
    description:
      "Full-stack developer collaboration platform built with React micro frontends, Module Federation, Apollo GraphQL Federation, Node.js, Express, MongoDB, and session-based authentication using HTTP-only cookies. The system allows users to register, create projects, add feature requests, submit implementation drafts, and receive AI-powered structured review feedback. The AI Review service uses an Agentic RAG workflow with embeddings, FAISS vector search, structured output validation, reflection, confidence scoring, and citations.",
    tech: [
      "React",
      "Vite",
      "Module Federation",
      "GraphQL",
      "Apollo Gateway",
      "Apollo Federation",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "HTTP-only Cookies",
      "LangChain.js",
      "LangGraph.js",
      "FAISS",
      "Gemini API",
      "Zod",
    ],
    github:
      "https://github.com/percyosag/AI-Powered-Federated-Project-Review-Platform",
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
