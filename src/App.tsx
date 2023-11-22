import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RecipePage from "./Pages/RecipePage";
import initialData from "./initialData";
import recipeModel from "./recipeModel";
import { useState } from "react";

type recipeList = recipeModel[];

const App = () => {
  const [recipeList, setRecipeList] = useState<recipeList>(initialData);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage recipeTools={{ recipeList, setRecipeList }} />}
      />
      <Route
        path="/recipe/:id"
        element={<RecipePage recipeList={recipeList} />}
      />
    </Routes>
  );
};

export default App;
