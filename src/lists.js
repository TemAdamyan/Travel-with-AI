import './App.css';
import React from 'react';

const Lists = ({ llamaResponse }) => {
  return (
    <div className="lists">
      <center>  <h1 style={{ color: '#19A7CE' }}>PACKING LISTS</h1> </center> 

      <div className='large' name="itinerary" placeholder="Packing Lists are generating">
      <div className='responce'> {llamaResponse} </div>
      </div>

    </div>
  );
}

export default Lists;