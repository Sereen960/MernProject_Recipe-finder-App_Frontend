import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeListPage from './components/RecipeListPage';
import RecipeDetailPage from './components/RecipeDetailPage';
import AddRecipePage from './components/AddRecipePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipeListPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
