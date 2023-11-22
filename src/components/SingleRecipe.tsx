import { FC, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditRecipe from "./EditRecipe";
import recipeModel from "../recipeModel";
import { Link } from "react-router-dom";

interface SingleRecipeProps {
  id: number;
  title: string;
  description: string;
  img: string;
  deleteRecipe: (id: number) => void;
  updateRecipeList: (updatedREcipe: recipeModel) => void;
}

const SingleRecipe: FC<SingleRecipeProps> = ({
  id,
  title,
  description,
  img,
  deleteRecipe,
  updateRecipeList,
}) => {
  const [isEdited, setIsEdited] = useState<boolean>(false);

  if (isEdited) {
    return (
      <EditRecipe
        oldVersion={{ id, title, description, img }}
        updateRecipeList={updateRecipeList}
        setIsEdited={setIsEdited}
      />
    );
  }

  return (
    <div className=" flex flex-col items-center m-5 gap-3 justify-center border w-6/7 p-5 cursor-pointer">
      <div className="flex w-full justify-end  text-gray-700 text-xl gap-1">
        <FaEdit
          className="hover:text-blue-700 transition-colors ease-in duration-100"
          onClick={() => setIsEdited(true)}
        />
        <span
          className="hover:text-red-900 transition-colors ease-in duration-100"
          onClick={() => deleteRecipe(id)}
        >
          <MdDelete />
        </span>
      </div>
      <div className="font-bold ">{title}</div>
      <div className=" text-gray-500 whitespace-pre-line">
        {description.slice(0, 199) + "..."}{" "}
        <span className="text-gray-900">
          (<Link to={`/recipe/${id}`}>see full recipe</Link>)
        </span>
      </div>
      <img
        className="h-48 w-48 object-cover rounded-xl"
        src={img}
        alt={title}
      />
    </div>
  );
};

export default SingleRecipe;
