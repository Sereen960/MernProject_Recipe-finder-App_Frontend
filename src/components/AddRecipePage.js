import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddRecipe.css'; // Ensure the correct path
import { Link } from 'react-router-dom';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');

  const submitRecipe = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', recipeName);
    formData.append('description', description);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);
    formData.append('image', imageFile);

    try {
      const response = await axios.post('http://localhost:5000/api/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Recipe added:', response.data);
      alert('Recipe added successfully!');
    } catch (error) {
      console.error('Failed to add recipe:', error);
      setError('Failed to add recipe');
    }
  };

  return (
    <div className="addrecipe">
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <Link to="/" className="home-button">Home</Link>
      <form onSubmit={submitRecipe}>
        <input type="text" placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <input type="text" placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} required />
        <button type="submit">Add Recipe</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default AddRecipe;
