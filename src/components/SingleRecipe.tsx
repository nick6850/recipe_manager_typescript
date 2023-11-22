import { FC } from "react";
import recipeModel from "../recipeModel";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface SingleRecipeProps {
  id: number;
  title: string;
  description: string;
  img: string;
  deleteRecipe: (id: number) => void;
}

const SingleRecipe: FC<SingleRecipeProps> = ({
  id,
  title,
  description,
  img,
  deleteRecipe,
}) => {
  return (
    <div className=" relative flex flex-col items-center m-5 gap-5 justify-center border w-6/7 p-5 cursor-pointer">
      <div className="flex w-full justify-end absolute top-3 text-gray-700 right-5 text-xl gap-1">
        <FaEdit />
        <span onClick={() => deleteRecipe(id)}>
          <MdDelete />
        </span>
      </div>
      <div className="font-bold ">{title}</div>
      <div className=" text-gray-500 whitespace-pre-line">
        {description.slice(0, 199) + "..."}{" "}
        <span className="text-gray-900">(see full recipe)</span>
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
