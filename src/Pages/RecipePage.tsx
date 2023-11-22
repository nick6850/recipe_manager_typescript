import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import recipeModel from "../recipeModel";
import { IoArrowBackOutline } from "react-icons/io5";

type RecipePageProps = {
  recipeList: recipeModel[];
};

const RecipePage: FC<RecipePageProps> = ({ recipeList }) => {
  const { id } = useParams<{ id: string }>();
  console.log(recipeList);
  const filteredRecipe = recipeList.find(
    (recipe) => JSON.stringify(recipe.id) === id
  );

  if (!filteredRecipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <>
      <Link className="text-4xl relative top-5 left-5" to="/">
        <IoArrowBackOutline />
      </Link>
      <div className="m-auto mt-4 p-5 w-screen border flex flex-col max-w-2xl ">
        <div className="text-3xl">{filteredRecipe.title}</div>
        <div className="whitespace-pre-line font-mono mt-3">
          {filteredRecipe.description}
        </div>
        <img
          className="rounded-md max-h-64 object-cover mt-4"
          src={filteredRecipe.img}
          alt={filteredRecipe.title}
        />
      </div>
      <h1 className="text-center text-red-500 mt-5 text-5xl italic font-serif">
        Enjoy your meal!
      </h1>
    </>
  );
};

export default RecipePage;
