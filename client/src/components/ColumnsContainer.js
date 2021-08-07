import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function ColumnsContainer() {
  return (
    <Container className="mt-4">
      <Row className="text-center">
        <Col>
          <h2>A DESTINATION</h2>
        </Col>
      </Row>
      <Row className="mt-3 text-left h-auto mb-4">
        <Col className="mx-auto" md={5}>
          <p>
            As a result of the colonization of Cuba by Spain, one of the main
            influences on the cuisine is from Spain. Other culinary influences
            include Africa, from the Africans who were brought to Cuba as
            slaves, and French, from the French colonists who came to Cuba from
            Haiti.
          </p>
        </Col>

        <Col className="mx-auto" md={5}>
          <p>
            Another factor is that Cuba is an island, making seafood something
            that greatly influences Cuban cuisine. Another contributing factor
            to Cuban cuisine is that Cuba is in a tropical climate, which
            produces fruits and root vegetables that are used in Cuban dishes
            and meals.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
