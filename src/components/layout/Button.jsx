import { useContext } from "react";
import PokemonContext from "../../context/pokemon-context";

const Button = (props) => {
  const pokeCtx = useContext(PokemonContext);

  const handleClick = () => {
    if (props.generation === props.active) {
      return;
    }
    
    props.onChange(props.generation);

    switch (props.generation) {
      case "I":
        pokeCtx.changeExibition(0, 151);
        break;
      case "II":
        pokeCtx.changeExibition(151, 100);
        break;
      case "III":
        pokeCtx.changeExibition(251, 135);
        break;
      case "IV":
        pokeCtx.changeExibition(386, 107);
        break;
      case "V":
        pokeCtx.changeExibition(493, 156);
        break;
      case "VI":
        pokeCtx.changeExibition(649, 72);
        break;
      case "VII":
        pokeCtx.changeExibition(721, 88);
        break;
      case "VIII":
        pokeCtx.changeExibition(809, 96);
        break;
      default:
        pokeCtx.changeExibition(0, 151);
    }
  };

  return (
    <button className={props.className} onClick={handleClick}>
      {" "}
      {props.children}{" "}
    </button>
  );
};

export default Button;
