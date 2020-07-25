import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import RepoSection from "./RepoSection";

const RepoCell = (props) => {
  return (
    <Container>
      <Row>
        <Col className="display-4">
          <RepoSection />
        </Col>
      </Row>
    </Container>
  );
};

export default RepoCell;
