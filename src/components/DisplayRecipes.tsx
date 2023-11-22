import { FC } from "react";
import recipeModel from "../recipeModel";
import SingleRecipe from "./SingleRecipe";

interface DisplayRecipesProps {
  recipeList: recipeModel[];
  deleteRecipe: (id: number) => void;
  updateRecipeList: (updatedREcipe: recipeModel) => void;
}

const DisplayRecipes: FC<DisplayRecipesProps> = ({
  recipeList,
  deleteRecipe,
  updateRecipeList,
}) => {
  const recipeEl = recipeList.map((recipe, id) => (
    <SingleRecipe
      key={id}
      {...recipe}
      deleteRecipe={deleteRecipe}
      updateRecipeList={updateRecipeList}
    />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {recipeEl}
    </div>
  );
};

export default DisplayRecipes;
