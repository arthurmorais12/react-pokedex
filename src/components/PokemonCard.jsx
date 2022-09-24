import colours from "../utils/pokemon-type-colours";
import PokemonContext from "../context/pokemon-context";
import { useContext } from "react";

const PokemonCard = (props) => {
  let width = props.type2 ? 32 : 64;

  const pokeCtx = useContext(PokemonContext)

  const handleClick = () => {
    pokeCtx.onShowDetail({
      picUrl: props.picUrl,
      name: props.name,
      type1: props.type1,
      type2: props.type2,
      id: props.id
    })
  }

  return (
    <div
      className={`bg-opacity-20 flex flex-col text-center justify-around rounded-3xl w-${props.width} m-4 h-4/5 cursor-pointer`}
      style={{ backgroundColor: colours[`${props.type1}`] + "50" }}
      onClick={handleClick}
    >
      <p className="font-['Lato'] text-xl mt-3"># {props.id} - {props.name.toUpperCase()}</p>
      <img src={props.picUrl} alt="" className="h-3/5" />
      <div className="flex justify-center ">
        <div
          className={`p-4 rounded-2xl w-${width} mt-6 ml-1 h-12 text-center text-xl leading-4 font-['Lato'] font-bold`}
          style={{ backgroundColor: colours[`${props.type1}`] }}
        >
          {props.type1.toUpperCase()}
        </div>
        {props.type2 && (
          <div
            className={`p-4 rounded-2xl w-32 mt-6 mr-1 ml-1  h-12 text-center font-['Lato'] leading-4 text-xl font-bold`}
            style={{ backgroundColor: colours[`${props.type2}`] }}
          >
            {props.type2.toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
