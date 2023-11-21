import { FC } from "react";
import NewRecipe from "./components/NewRecipe";

const App: FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="uppercase text-4xl m-5 tracking-widest">Recipe Manager</h1>
      <NewRecipe />
    </div>
  );
};

export default App;
