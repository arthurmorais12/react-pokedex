import { GoMarkGithub } from "react-icons/go";
import { MdOutlineDarkMode, MdCatchingPokemon, MdDarkMode } from "react-icons/md";
import Input from "../Input";
import { useContext } from "react";
import DarkContext from "../../context/dark-context";

const Header = () => {
  const themeCtx = useContext(DarkContext)

  return (
    <header className="container flex justify-between items-center col-span-full h-12	row-end-1 bg-gray-200 dark:bg-gray-600">
      <div className="m-4 w-4">
        <MdCatchingPokemon size={"2rem"} className="" />
      </div>
      <Input/>
      <nav className="flex justify-between w-32 m-4 p-4 ">
        <GoMarkGithub size={"2rem"} className="cursor-pointer" />
        {!themeCtx.isDark && <MdOutlineDarkMode size={"2rem"} className="cursor-pointer" onClick={themeCtx.onChangeTheme}/>}
        {themeCtx.isDark && <MdDarkMode size={"2rem"} className="cursor-pointer" onClick={themeCtx.onChangeTheme}/>}

      </nav>
    </header>
  );
};

export default Header;
