import { FC, useState } from "react";
import NewRecipe from "./components/NewRecipe";
import recipeModel from "./recipeModel";
import DisplayRecipes from "./components/DisplayRecipes";
import initialData from "./initialData";

type recipeList = recipeModel[];

const App: FC = () => {
  const [recipeList, setRecipeList] = useState<recipeList>(initialData);

  const deleteRecipe = (id: number): void => {
    setRecipeList((prev) => prev.filter((recipe) => recipe.id != id));
  };

  const addRecipeList = (newRecipe: recipeModel): void => {
    setRecipeList([...recipeList, newRecipe]);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="uppercase text-4xl m-5 tracking-widest">Recipe Manager</h1>
      <NewRecipe addRecipeList={addRecipeList} />
      <DisplayRecipes recipeList={recipeList} deleteRecipe={deleteRecipe} />
    </div>
  );
};

export default App;
