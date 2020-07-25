import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";

import { GitContext } from "../../ContextProvider";

const RepoSection = (props) => {
  const repoTitle = useContext(GitContext);
  return (
    <Container>
      <Row>
        <Col className="display-4">{repoTitle.title}</Col>
        <Col className="display-4">{repoTitle.description}</Col>
      </Row>
    </Container>
  );
};

export default RepoSection;
