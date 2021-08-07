import React from "react";
import { Col, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <Jumbotron className="text-left text-light bg-dark mb-0 mt-5 font-footer p-4">
      <Container>
        <Row>
          <Col xs={7} sm={8} className="border-right">
            <p className="text-uppercase">LOCATION</p>
            <Row className="text-capitalize">
              <Col lg={3}>
                <p>Miami 376 Palm Street Miami, FL - 11231 <br></br>(718) 555-1234</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col>
              <p className="text-uppercase">Hours</p>
              <p>
                Monday — Thursday
                <p>8am — 11pm </p>
              </p>

              <p>
                Friday — Sunday
                <p>11am — 11pm</p>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
