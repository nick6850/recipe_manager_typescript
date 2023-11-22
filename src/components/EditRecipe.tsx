import { ChangeEvent, FC, FormEvent, useState } from "react";
import recipeModel from "../recipeModel";

interface EditRecipeProps {
  oldVersion: recipeModel;
  updateRecipeList: (updatedREcipe: recipeModel) => void;
  setIsEdited: (boolean: boolean) => void;
}

const EditRecipe: FC<EditRecipeProps> = ({
  oldVersion,
  updateRecipeList,
  setIsEdited,
}) => {
  const { id, title, description, img } = oldVersion;
  const [updatedRecipe, setUpdatedRecipe] = useState<recipeModel>({
    id,
    title,
    description,
    img,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setUpdatedRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, img } = updatedRecipe;
    if (title && description && img) {
      updateRecipeList(updatedRecipe);
      setIsEdited(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="my-5 flex flex-col items-center gap-2"
      >
        <input
          className="border border-black w-4/5"
          type="text"
          name="title"
          placeholder="name..."
          value={updatedRecipe.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="border-black border w-4/5 h-64"
          placeholder="Write the description..."
          value={updatedRecipe.description}
          onChange={handleChange}
        ></textarea>
        <input
          className="border-black border w-4/5"
          type="text"
          name="img"
          placeholder="Type in url"
          value={updatedRecipe.img}
          onChange={handleChange}
        />
        <button className="rounded-xl py-1 bg-purple-800 px-3 text-white">
          Update recipe
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;
