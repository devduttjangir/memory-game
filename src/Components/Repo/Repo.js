import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import RepoCell from "./RepoCell";

const Repo = (props) => {
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(0);

  const filterCollections = (data) => {
    setRepos(data);
  };

  const getCollections = () => {
    const URL = "https://api.github.com/gists/public";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => filterCollections(data));
  };

  useEffect(() => {
    // getCollections();
  }, []);

  // like componentDidUpdate + componentDidMount
  // useEffect(()=>{})

  // like componentDidMount
  // useEffect(()=>{},[])

  // like componentDidMount + update on particular state
  // useEffect(()=>{},[stateName])

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRepo = () => {
    setRepos(["repo"]);
  };

  const renderRepos = () => {
    return repos.map((repo) => {
      return (
        <Row>
          <Col>{JSON.stringify(repo)}</Col>
        </Row>
      );
    });
  };
  return (
    <Container>
      <Row>
        <Col>Repos</Col>
      </Row>
      <Row>
        <Col onClick={() => handleClick()}>Click Here {count}</Col>
        <Col onClick={() => handleRepo()}>Repo Here {count}</Col>
      </Row>
      <Row>
        <Col>
          <RepoCell />
        </Col>
      </Row>
      {renderRepos()}
    </Container>
  );
};
export default Repo;
