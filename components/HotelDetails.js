import React from 'react';
import { useParams } from 'react-router-dom';
import Room from './Room';

const HotelDetails = ({ hotels }) => {
  const { hotelId } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <h2>Available Rooms</h2>
      {hotel.rooms.map((room) => (
        <Room key={room.id} roomData={room} />
      ))}
    </div>
  );
};

export default HotelDetails;
