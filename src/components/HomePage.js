// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Feedback from './Feedback'; // Ensure this path is correct
import '../styles/home.css'; // Updated styles

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <div className="image-container">
          <img src={require('../assets/bg.webp')} alt="Cooking" />
        </div>
        <div className="text-container">
        
          <h1>Nova's recipe</h1>
          <Link to="/recipes" className="explore-button">Explore Recipes</Link>
          <Link to="/add-recipe" className="add-button">Add New Recipe</Link>
          <Feedback /> {/* Add the Feedback component here */}
          <footer className="footer">
        <div className="scrolling-text">
          Explore many recipes and enjoy with your loved ones!
        </div>
      </footer>
         
        </div>
       
      </div>
     
     
    </div>
    
  );
};

export default HomePage;
