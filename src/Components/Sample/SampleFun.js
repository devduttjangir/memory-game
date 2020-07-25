import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";

import { GitContext } from "../../ContextProvider";

const SampleFun = () => {
  const repo = useContext(GitContext);
  return (
    <Container>
      <Row>
        <Col>Title : {repo.title}</Col>
      </Row>
    </Container>
  );
};

export default SampleFun;
