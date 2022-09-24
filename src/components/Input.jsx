import { MdSearch } from "react-icons/md";
import { useState, useContext } from "react";
import PokemonContext from "../context/pokemon-context";
import DarkContext from "../context/dark-context";
const Input = () => {
  const pokeCtx = useContext(PokemonContext);
  const themeCtx = useContext(DarkContext)
  const [userInput, setUserInput] = useState("");

  const handleInput = (event) => {
    setUserInput(event.target.value);
    pokeCtx.changeFiltered(event.target.value);
  };

  return (
    <section className="h-32 flex flex-col justify-center font-bold text-3xl ml-16">
      <div className="flex w-full my-4 relative items-center">
        <input
          type="text"
          id="pokemon"
          className="w-full  text-xl rounded-lg bg-white border-white placeholder-gray-800 text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-base placeholder:text-center text-opacity-70"
          value={userInput}
          onChange={handleInput}
          placeholder="Digite o nome do pokemon"
        />
        <MdSearch
          className="absolute right-1 cursor-pointer"
          size={"1.3rem"}
          color={themeCtx.isDark ? "white" : "black" }
        />
      </div>
    </section>
  );
};

export default Input;
