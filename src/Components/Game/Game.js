import "./style.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import React, { useState } from "react";

import Animals from "../../Images/Animals/Animals";

const Game = () => {
  const [grids, setGrids] = useState(
    [
      { id: 1, faceDown: true, image: Animals.cat },
      { id: 2, faceDown: true, image: Animals.dog },
      { id: 3, faceDown: true, image: Animals.tiger },
      { id: 4, faceDown: true, image: Animals.horse },
      { id: 5, faceDown: true, image: Animals.elephant },
      { id: 6, faceDown: true, image: Animals.cow },
      { id: 7, faceDown: true, image: Animals.lion },
      { id: 8, faceDown: true, image: Animals.cat },
      { id: 9, faceDown: true, image: Animals.dog },
      { id: 10, faceDown: true, image: Animals.tiger },
      { id: 11, faceDown: true, image: Animals.horse },
      { id: 12, faceDown: true, image: Animals.elephant },
      { id: 13, faceDown: true, image: Animals.cow },
      { id: 14, faceDown: true, image: Animals.lion },
    ].sort(() => Math.random() - 0.5)
  );

  const handleCardClick = (id) => {
    const cardIndex = grids.findIndex((grid) => grid.id === id);
    const gridObject = { ...grids[cardIndex], faceDown: false };
    const updatedCards = grids.splice(cardIndex, 1, gridObject);
    setGrids([...grids]);
  };

  const renderGrid = () => {
    return grids.map((grid) => {
      return (
        <>
          <Col
            className="col-3 p-2 d-flex flex-grow-1 border border-danger"
            onClick={() => handleCardClick(grid.id)}
          >
            <Container className={grid.faceDown ? "grid bg-danger" : "p-0"}>
              <Row>
                <Col>
                  {!grid.faceDown && (
                    <Image src={grid.image} width="100%" height="250px" />
                  )}
                </Col>
              </Row>
            </Container>
          </Col>
        </>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col className="font-weight-light display-4">Memory</Col>
        <Col className="text-right font-weight-light display-4 text-primary">
          Score : <span className="text-danger">20</span>
        </Col>
      </Row>
      <Row>{renderGrid()}</Row>
    </Container>
  );
};

export default Game;
