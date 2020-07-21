import "./style.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import React, { useState } from "react";

import Animals from "../../Images/Animals/Animals";

const Game = () => {
  const [activeCount, setactiveCount] = useState(0);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [grids, setGrids] = useState(
    [
      {
        id: 1,
        faceDown: true,
        image: Animals.cat,
        isMatched: false,
        title: "cat",
      },
      {
        id: 2,
        faceDown: true,
        image: Animals.dog,
        isMatched: false,
        title: "dog",
      },
      {
        id: 3,
        faceDown: true,
        image: Animals.tiger,
        isMatched: false,
        title: "tiger",
      },
      {
        id: 4,
        faceDown: true,
        image: Animals.horse,
        isMatched: false,
        title: "horse",
      },
      {
        id: 5,
        faceDown: true,
        image: Animals.elephant,
        isMatched: false,
        title: "elephant",
      },
      {
        id: 6,
        faceDown: true,
        image: Animals.cow,
        isMatched: false,
        title: "cow",
      },
      {
        id: 7,
        faceDown: true,
        image: Animals.lion,
        isMatched: false,
        title: "lion",
      },
      {
        id: 8,
        faceDown: true,
        image: Animals.cat,
        isMatched: false,
        title: "cat",
      },
      {
        id: 9,
        faceDown: true,
        image: Animals.dog,
        isMatched: false,
        title: "dog",
      },
      {
        id: 10,
        faceDown: true,
        image: Animals.tiger,
        isMatched: false,
        title: "tiger",
      },
      {
        id: 11,
        faceDown: true,
        image: Animals.horse,
        isMatched: false,
        title: "horse",
      },
      {
        id: 12,
        faceDown: true,
        image: Animals.elephant,
        isMatched: false,
        title: "elephant",
      },
      {
        id: 13,
        faceDown: true,
        image: Animals.cow,
        isMatched: false,
        title: "cow",
      },
      {
        id: 14,
        faceDown: true,
        image: Animals.lion,
        isMatched: false,
        title: "lion",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const handleCardClick = (id) => {
    const cardIndex = grids.findIndex((grid) => grid.id === id);
    const cardObject = grids[cardIndex];
    const gridObject = { ...cardObject, faceDown: !cardObject.faceDown };
    grids.splice(cardIndex, 1, gridObject);
    setGrids([...grids]);
    setactiveCount(activeCount + 1);
    checkForMatchedCards(gridObject, cardIndex);
    checkAndResetCards();
    setAttempt(attempt + 1);
  };

  const checkAndResetCards = () => {
    if (activeCount >= 2) {
      resetCards();
    }
  };

  const checkForMatchedCards = (activeObject, activeIndex) => {
    const selectedCards = grids.filter(
      (card) =>
        card.faceDown === false &&
        card.title === activeObject.title &&
        card.id !== activeObject.id
    );
    if (selectedCards.length > 0) {
      // card matched
      const firstCard = { ...activeObject, isMatched: true };
      const secondCard = { ...selectedCards[0], isMatched: true };
      const secondCardIndex = grids.findIndex(
        (grid) => grid.id === secondCard.id
      );
      grids.splice(activeIndex, 1, firstCard);
      grids.splice(secondCardIndex, 1, secondCard);
      setGrids([...grids]);
      setScore(score + 10);
    }
  };

  const resetCards = () => {
    const cards = grids.map((grid) => {
      return {
        ...grid,
        faceDown: true,
      };
    });
    setGrids(cards);
    setactiveCount(0);
  };
  const renderGrid = () => {
    return grids.map((grid, index) => {
      return (
        <>
          <Col
            className="col-2 p-2 d-flex flex-grow-1 border border-danger"
            onClick={() => handleCardClick(grid.id)}
          >
            <Container className={grid.faceDown ? "grid bg-danger" : "p-0"}>
              <Row>
                <Col>
                  {(!grid.faceDown || grid.isMatched) && (
                    <Image src={grid.image} width="100%" height="180px" />
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
          <Container>
            <Row>
              <Col>
                Score : <span className="text-danger">{score}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                Attempt : <span className="text-danger">{attempt}</span>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>{renderGrid()}</Row>
    </Container>
  );
};

export default Game;
