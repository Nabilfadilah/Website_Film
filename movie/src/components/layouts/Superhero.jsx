import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import cardsSuperhero from "../fragments/DataSuperhero";

const Superhero = () => {
  return (
    <div>
      <Container id="superheroId">
        <br />
        <h1 className="text-white text-center">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          {cardsSuperhero.map((card, index) => (
            <Col md={4} className="movieWrapper" key={index}>
              <Card className="movieImage">
                <Image src={card.image} alt={card.title} className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="mt-1 text-center">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="text-left">
                      {card.description}
                    </Card.Text>
                    <Card.Text className="text-left">{card.info}</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
