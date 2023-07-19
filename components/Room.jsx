// import React from 'react';

// const Room = ({ roomData }) => {
//   const handleBookNow = () => {
//     // Add your booking logic here, e.g., call an API to book the room
//     // Update the `isReserved` property accordingly
//     console.log(`Booked room ${roomData.name}`);
//   };

//   return (
//     <div>
//         <h1>"he"</h1>
//       <h3>{roomData.name}</h3>
//       <p>{roomData.description}</p>
//       <button onClick={handleBookNow} disabled={roomData.isReserved}>
//         {roomData.isReserved ? 'Reserved' : 'Book Now'}
//       </button>
//     </div>
//   );
// };

// export default Room;


import React, { useState } from 'react';

const Room = ({ hotelId }) => {
  const [showRooms, setShowRooms] = useState(false);

  const handleViewRooms = () => {
    setShowRooms(true);
  };

  const renderRooms = () => {
    if (showRooms) {
      // Replace this with your logic to fetch the rooms data for the specific hotel
      const roomsData = [
        { id: 1, name: 'Room 1', description: 'This is Room 1' },
        { id: 2, name: 'Room 2', description: 'This is Room 2' },
        { id: 3, name: 'Room 3', description: 'This is Room 3' },
        { id: 4, name: 'Room 4', description: 'This is Room 4' },
        { id: 5, name: 'Room 5', description: 'This is Room 5' },
        { id: 6, name: 'Room 6', description: 'This is Room 6' },
      ];

      return (
        <div>
          <h2>Rooms for Hotel {hotelId}</h2>
          {roomsData.map((room) => (
            <div key={room.id}>
              <h3>{room.name}</h3>
              <p>{room.description}</p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <button onClick={handleViewRooms}>View Rooms</button>
      {renderRooms()}
    </div>
  );
};

export default Room;
