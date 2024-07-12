import './App.css';
import React, { useState } from 'react';

const Home = ({ onLlmResponse, onLlamaResponse }) => {
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [travelers, setTravelers] = useState('');

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    try {
      
      if (type === 'itinerary') {
        const response = await fetchLlmResponse(type);
        onLlmResponse(response);
      } else if (type === 'packing_list') {
        const response = await fetchLlmResponse(type);
        onLlamaResponse(response);
      } else {
        const response_itinerary = await fetchLlmResponse('itinerary');
        const response_packing_list = await fetchLlmResponse('packing_list');
        onLlmResponse(response_itinerary);
        onLlamaResponse(response_packing_list);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchLlmResponse = async (type) => {
    const TOKEN = '#';
    const url = 'https://api.openai.com/v1/chat/completions';
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: getContent(type) }],
      temperature: 0.7
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify(requestBody)
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.choices[0].message.content;
  };

  const getContent = (type) => {
    if (type === 'itinerary') {
      return `Design a holiday itinerary for ${travelers} going to ${location} for the duration of ${duration}`;
    } else if (type === 'packing_list') {
      return `Provide a packing list for a holiday itinerary for ${travelers} going to ${location} for the duration of ${duration}`;
    }
  };

  const handleLocationTextareaChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDurationTextareaChange = (e) => {
    setDuration(e.target.value);
  };

  const handleTravelersTextareaChange = (e) => {
    setTravelers(e.target.value);
  };


  return (
    <div className="App">

   <center>
            <form className='city'> 
                <center> <h2>Where do you want to go?</h2> </center>
                <input value={location} onChange={handleLocationTextareaChange} type="text" name="city" placeholder=" Which city do you want to visit?" />
                <input value={duration} onChange={handleDurationTextareaChange} type="text" name="country" placeholder=" Duration" />
                <input value={travelers} onChange={handleTravelersTextareaChange} type="text" name="people" placeholder=" Number of people" />
                {/* <input type="text" name="reason" placeholder="  For..." style={{ paddingBottom: '180px' }} /> */}
            </form>
   </center>
   <br></br>
   <center><h1>Generate↓</h1></center>
   <div className='generate'>
        {/* <div className="gend"> <button className="gen" id="itinerary" disabled={location === '' || duration === '' || travelers === ''} onClick={(e) => handleSubmit(e, 'itinerary')}> <h1>Itinerary</h1> </button> </div>
        <div className="gend"> <button className="gen" id="packing list" disabled={location === '' || duration === '' || travelers === ''} onClick={(e) => handleSubmit(e, 'packing_list')}> <h1>Packing Lists</h1> </button> </div> */}
        <div className="gend"> <button className="gen" id="packing list" disabled={location === '' || duration === '' || travelers === ''} onClick={(e) => handleSubmit(e, '')}> <h1>Itinerary & Packing Lists</h1> </button> </div>
      </div>
    </div>
  );
}

export default Home;