import { FC } from "react";
import NewRecipe from "../components/NewRecipe";
import recipeModel from "../recipeModel";
import DisplayRecipes from "../components/DisplayRecipes";

interface HomePageProps {
  recipeTools: {
    recipeList: recipeModel[];
    setRecipeList: React.Dispatch<React.SetStateAction<recipeModel[]>>;
  };
}

const HomePage: FC<HomePageProps> = ({ recipeTools }) => {
  const { recipeList, setRecipeList } = recipeTools;

  const deleteRecipe = (id: number): void => {
    setRecipeList((prev) => prev.filter((recipe) => recipe.id != id));
  };

  const addRecipeList = (newRecipe: recipeModel): void => {
    setRecipeList([...recipeList, newRecipe]);
  };

  const updateRecipeList = (updatedRecipe: recipeModel): void => {
    setRecipeList((prev) =>
      prev.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="uppercase text-4xl m-5 tracking-widest">Recipe Manager</h1>
      <NewRecipe addRecipeList={addRecipeList} />
      <DisplayRecipes
        updateRecipeList={updateRecipeList}
        recipeList={recipeList}
        deleteRecipe={deleteRecipe}
      />
    </div>
  );
};

export default HomePage;
