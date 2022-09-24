import Button from "./Button";
import { useState } from "react";


const generations = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const Footer = () => {  
  const [active, setActive] = useState("");
 
  const handleChangeActive = (id) => {
    setActive(id);
  }



  return (
    <footer className="row-start-7 col-span-full flex justify-around items-center bg-gray-200 dark:bg-gray-600 h-12 font-[Lato]">
      <p>Gerações</p>
      {generations.map((generation) => {
        return (
          <Button
            key={generation}
            className={`w-12 hover:bg-gray-500 dark:hover:bg-gray-700 rounded-xl ${active === generation ? "bg-gray-400" : ""}`}
            generation={generation}
            onChange={handleChangeActive}
            active={active}
          >
            {generation}
          </Button>
        );
      })}
    </footer>
  );
};

export default Footer;
