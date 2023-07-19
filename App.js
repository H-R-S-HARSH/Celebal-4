import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelList from './components/HotelList';
import HotelDetails from './components/HotelDetails';
import Room from './components/Room';
import {hotelsData} from "./components/HotelList"
// import hotelsData from './data/hotels';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HotelList} />
        <Route path="/hotel/:hotelId" component={Room} />
       
        {/* <Route path={`/hotel/${hotel.id}`} component ={hotelsData} /> */}
      </Routes>
    </Router>
  );
};

export default App;
