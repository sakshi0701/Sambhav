import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Recipe from "../recipe/Recipe";
require('dotenv').config()

export default function Recipes() {

  const [Load, setLoad] = useState(false);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipies, setRecipies] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('apple')

  useEffect(() => {
    getRecipies();
    // eslint-disable-next-line
  }, [query]);

  const getRecipies = async () => {
    setLoad(!Load);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    setLoad(false);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <>
      <div className="w-100">
        <h2 style={{ fontWeight: "bold", fontStyle: "italic" }} className="text-primary text-center m-4">Start Cooking!</h2>
        <Router>

          <form onSubmit={getSearch} className="d-flex justify-content-center align-items-center">
            <input style={{ width: "70%", border: "none", background: "#e1e1e4" }} className="p-3 ml-2" placeholder='Search Here' type="text" value={search} onChange={updateSearch} />
            <button style={{ border: "none", borderRadius: "20px", padding: "10px 20px" }} className="btn-info m-3" type='submit'>Search</button>
          </form>

          <div className="d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
            {Load && (
              <div className="d-flex justify-content-center text-center spinner-border text-info" role="status"></div>
            )}
          </div>

          <div className="d-flex justify-content-around" style={{ flexWrap: "wrap" }}>
            {recipies.map(recipe => (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
        </Router>
      </div>
    </>
  )
}