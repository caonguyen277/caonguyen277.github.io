import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Recipe from "./component/Recipe";
import Alert from "./component/Alert";
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "7875ea50";

  const APP_KEY = "dd772e53efa1f8d0f7615e4f8e28472e";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if(!result.data.more){
        return setAlert('No food with such name');
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    }else {
      setAlert('Please fill the form');
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const recipesfunc = recipes.map((recipe) => (
    <Recipe key={uuidv4()} recipe={recipe} />
  ));
  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching app</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert = {alert}/>}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">{recipesfunc}</div>
    </div>
  );
}

export default App;
