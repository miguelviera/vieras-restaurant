import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function KitchenNames() {
  return (
    <Container className="text-center text-dark text-uppercase">
      <Row className="mt-4 h-auto">
        <Col>
          <h2>Leonardo Alfonso</h2>
          <h5 className="text-secondary">EXECUTIVE CHEF</h5>
        </Col>

        <Col>
          <h2>Luis Gonzalez</h2>
          <h5 className="text-secondary">CHEF DE CUISINE </h5>
        </Col>
      </Row>
    </Container>
  );
}
