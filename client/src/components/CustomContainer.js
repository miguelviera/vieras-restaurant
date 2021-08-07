import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CustomContainer() {
  return (
    <Container className="h-auto my-4 pt-3">
      <Row className="h-100">
        <Col className="text-center m-auto">
          <h2 className="text-uppercase">a destination</h2>
          <p className="m-auto w-75 pb-lg-5">
            Cuban cuisine is a blend of African, Spanish, and other Caribbean
            cuisines. Some Cuban recipes share spices and techniques with
            Spanish and African cooking, with some Caribbean influence in spice
            and flavor
          </p>
        </Col>
      </Row>
    </Container>
  );
}
