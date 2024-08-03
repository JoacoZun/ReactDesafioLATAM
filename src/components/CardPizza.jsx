import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <hr></hr>
        <Card.Text>
          <strong>Ingredientes:</strong>
          <div className="ingredients">
          🍕 {ingredients.join(', ')}
          </div>
          <hr></hr>
          <div className="card-price">Precio: ${price.toLocaleString()}</div>
        </Card.Text>
        <Button variant="outline-dark">Ver Más 👀</Button>
        <Button variant="secondary" className="ms-5">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
