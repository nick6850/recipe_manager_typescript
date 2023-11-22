import { ChangeEvent, FC, FormEvent, useState } from "react";
import recipeModel from "../recipeModel";

interface NewRecipeProps {
  addRecipeList: (newRecipe: recipeModel) => void;
}

const NewRecipe: FC<NewRecipeProps> = ({ addRecipeList }) => {
  const [newRecipe, setNewRecipe] = useState<recipeModel>({
    id: Math.random() * 1000,
    title: "",
    description: "",
    img: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, img } = newRecipe;
    if (title && description && img) {
      addRecipeList(newRecipe);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-screen items-center gap-2 max-w-3xl"
      >
        <input
          className="border border-black w-4/5"
          type="text"
          name="title"
          placeholder="name..."
          value={newRecipe.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="border-black border w-4/5 h-24"
          placeholder="Write the description..."
          value={newRecipe.description}
          onChange={handleChange}
        ></textarea>
        <input
          className="border-black border w-4/5"
          type="text"
          name="img"
          placeholder="Type in url"
          value={newRecipe.img}
          onChange={handleChange}
        />
        <button className="rounded-xl py-1 bg-green-700 px-3 text-white">
          Add new recipe
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
