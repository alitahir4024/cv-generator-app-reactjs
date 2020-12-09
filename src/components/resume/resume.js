import { Container, Row, Col } from "react-bootstrap";

const ResumeComponent = () => {
  return (
    <Container className="mt-5 mb-2">
      <main className="bg-dark">
        <header>
          <Row>
            <Col>
              <h1>Ali Tahir</h1>
              <h6>Full Stack Developer</h6>
            </Col>
          </Row>
        </header>
      </main>
    </Container>
  );
};

export default ResumeComponent;
