import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecipeListPage.css';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [filteredRecipes, setFilteredRecipes] = useState([]); // State for filtered recipes
  const [searchPerformed, setSearchPerformed] = useState(false); // State to check if search was performed

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch('http://localhost:5000/api/recipes');
      const data = await res.json();
      setRecipes(data);
      setFilteredRecipes(data); // Initialize with all recipes
    };

    fetchRecipes();
  }, []);

  // Function to handle search
  const handleSearch = () => {
    const results = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(results);
    setSearchPerformed(true); // Mark that search was performed
  };

  // Function to handle recipe deletion
  const handleDelete = async (recipeId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/recipes/${recipeId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        // Remove deleted recipe from the state
        setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
        setFilteredRecipes(filteredRecipes.filter(recipe => recipe._id !== recipeId));
      } else {
        console.log('Failed to delete the recipe');
      }
    } catch (error) {
      console.error('Error deleting the recipe:', error);
    }
  };

  return (
    <div className="recipelist">
      <div className="recipe-list">
        <h1>Explore Your Fav Recipes!!!</h1>
        {/* Home Button */}
        <Link to="/" className="home-button">Home</Link>

        {/* Search input and button */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        {/* Recipe container heading */}
        <h2 className="recipe-container-heading">Recipes</h2>

        {/* Displaying recipes or not found message */}
        {searchPerformed && filteredRecipes.length === 0 && (
          <p className="not-found-message">Recipe not found</p>
        )}

        <div className="recipe-container"> {/* Wrapper for horizontal scrolling */}
          {filteredRecipes.map((recipe) => (
            <div key={recipe._id} className="recipe-item">
              <h3>{recipe.name}</h3> {/* Recipe name heading */}
              <img src={`http://localhost:5000${recipe.image}`} alt={recipe.name} />
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe._id}`}>View Recipe</Link>
              <button onClick={() => handleDelete(recipe._id)} className="delete-button">
                Delete Recipe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeListPage;
