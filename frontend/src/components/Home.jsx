import React from 'react';
import './Home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';


function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/events');
  };
  return (
    <div className='img'>
      <img src='bg.avif'></img>



      <div className="des">
        <h1 className="htitle">Connecting the world..</h1>
        <p className="desp">Easy to search, just enter the keyword</p>
        <div className="search-section">
          <input className="searchbar" placeholder="Search..."  required/>
          <select className="selector">
            <option value="">Select a category</option><br></br>
            <option>Business</option>
            <option>Concerts</option>
            <option>Food</option>
            <option>Sport</option><br></br>
          </select><center className='but'>
          <button onClick={handleSearch} className="searchbt">Search</button></center>
        </div>
      </div>
    </div>
      
  );
}

export default Home;
