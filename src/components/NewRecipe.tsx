import { FC, FormEvent } from "react";

const NewRecipe: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("hey");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name..." />
        <input type="text" name="description" placeholder="description..." />
        <input type="text" name="image" />
        <button>Add new recipe</button>
      </form>
    </div>
  );
};

export default NewRecipe;
