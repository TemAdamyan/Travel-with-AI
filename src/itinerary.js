import './App.css';
import React from 'react';

const Itinerary = ({ llmResponse }) => {
  return (

    <div className="it">
  
      <center>  <h1 style={{ color: '#19A7CE' }}>ITINERARY</h1> </center> 

      <div className='large' name="itinerary" placeholder="Itinirary result is generating">
      <div className='responce'>  {llmResponse} </div>
      </div>

      </div>
  );
}

export default Itinerary;