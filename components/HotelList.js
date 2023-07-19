import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


export const hotelsData = [
  {
    id: 1,
    name: 'Hotel A',
    description: 'This is Hotel A',
    // Add rooms data for Hotel A
  },
  {
    id: 2,
    name: 'Hotel B',
    description: 'This is Hotel B',
    // Add rooms data for Hotel B
  },
  {
    id: 3,
    name: 'Hotel C',
    description: 'This is Hotel C',
    // Add rooms data for Hotel C
  },
  {
    id: 4,
    name: 'Hotel D',
    description: 'This is Hotel D',
    // Add rooms data for Hotel D
  },
  {
    id: 5,
    name: 'Hotel E',
    description: 'This is Hotel E',
    // Add rooms data for Hotel E
  },
  {
    id: 6,
    name: 'Hotel F',
    description: 'This is Hotel F',
    // Add rooms data for Hotel F
  }
];

const HotelCard = ({ hotel }) => {
  return (
    <>
    <Card style={{ width: '18rem' , margin:"40px"}}>
      <Card.Body>
        <Card.Title>{hotel.name}</Card.Title>
        <Card.Text>{hotel.description}</Card.Text>
        <Link to={`/hotel/${hotel.id}`}>
          <Button variant="primary">View Rooms</Button>
        </Link>
      </Card.Body>
    </Card>
    </>
  );
};

const HotelList = () => {
  return (
    <div>
      <h1>Hotel List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {hotelsData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
