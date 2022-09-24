import React, { useEffect } from "react";
import PokemonModal from "./layout/PokemonModal";
import PokemonCard from "./PokemonCard";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import PokemonContext from "../context/pokemon-context";
import PokemonStatus from "./layout/PokemonStatus";

const PokemonDetail = (props) => {
  const pokeCtx = useContext(PokemonContext);
  const { hp, attack, defense, special_attack, special_defense, speed } =
    pokeCtx.pokeDetail;

  const sumBaseStats =
    hp + attack + defense + special_attack + special_defense + speed;

  return (
    <PokemonModal>
      <div className="flex">
        <PokemonCard
          picUrl={props.picUrl}
          name={props.name}
          key={props.id}
          type1={props.type1}
          type2={props.type2}
          id={props.id}
          width={"1/3"}
        />
        <div className="w-2/3 flex flex-col items-center justify-around">
          <PokemonStatus title={"HP"} status={hp} sumBaseStats={sumBaseStats} />
          <PokemonStatus
            title={"ATTACK"}
            status={attack}
            sumBaseStats={sumBaseStats}
          />
          <PokemonStatus
            title={"DEFENSE"}
            status={defense}
            sumBaseStats={sumBaseStats}
          />
          <PokemonStatus
            title={"SPECIAL ATTACK"}
            status={special_attack}
            sumBaseStats={sumBaseStats}
          />
          <PokemonStatus
            title={"SPECIAL DEFENSE"}
            status={special_defense}
            sumBaseStats={sumBaseStats}
          />
          <PokemonStatus
            title={"SPEED"}
            status={speed}
            sumBaseStats={sumBaseStats}
          />
        </div>
      </div>
      <MdClose
        className="absolute right-3 top-3 cursor-pointer"
        size={"2rem"}
        onClick={pokeCtx.unShowDetail}
      />
    </PokemonModal>
  );
};

export default PokemonDetail;
