import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const link = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"
  const app_id = "61ca5898"
  const app_key = "7d694db227f34bdb72306bb2f45220e6"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [submit, setSubmit] = useState('chicken');

  useEffect(() => {
    getrecipe();
  }, [submit])

  const getrecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${submit}&app_id=${app_id}&app_key=${app_key}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const onwrite = (e) => {
    setSearch(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Recipe App</h1>
      </div>

      <form onSubmit={onSubmit} className="form">
        <input type="text" 
               className="text"
               value={search}
               onChange={onwrite}
        />
        <button className="btn">
          submit
        </button>
      </form>

      <div className="box">
        {recipes.map((recipe) => (
            <Recipe key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    calories={recipe.recipe.calories}
                    ingredients={recipe.recipe.ingredients}
            />
          ))}
      </div>
      
    </div>
  );
}

export default App;
