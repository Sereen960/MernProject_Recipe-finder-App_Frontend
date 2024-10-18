import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
      const data = await res.json();
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={`http://localhost:5000${recipe.image}`} alt={recipe.name} />
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.split(',').map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
