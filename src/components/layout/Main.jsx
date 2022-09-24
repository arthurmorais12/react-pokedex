import PokemonCard from "../PokemonCard";
import PokemonContext from "../../context/pokemon-context";
import { useContext, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import PokemonDetail from "../PokemonDetail";

const Main = () => {
  const pokeCtx = useContext(PokemonContext);

  const { picUrl, name, type1, type2, id, showDetail } = pokeCtx.pokeDetail;

  useEffect(() => {
    pokeCtx.fetchPokemons(pokeCtx.limit, pokeCtx.offset);
  }, [pokeCtx.fetchPokemons, pokeCtx.limit, pokeCtx.offset]);

  return (
    <main className="container row-start-1 row-end-7 col-start-1 col-end-4 flex flex-col items-center">
      <section className="h-12 w-full justify-center mr-12 mt-4 flex text-center text-5xl font-bold font-[Lato]">
        POKEDEX
      </section>
      <section className="h-full w-full flex flex-wrap justify-center overflow-y-auto">
        {!pokeCtx.isLoading &&
          !pokeCtx.isFiltered &&
          pokeCtx.allPokemons.map((poke) => {
            return (
              <PokemonCard
                picUrl={poke.picUrl}
                name={poke.name}
                key={poke.id}
                type1={poke.type1}
                type2={poke.type2}
                id={poke.id}
                width={"1/5"}
              />
            );
          })}
        {!pokeCtx.isLoading &&
          pokeCtx.isFiltered &&
          pokeCtx.pokesFiltered.map((poke) => {
            return (
              <PokemonCard
                picUrl={poke.picUrl}
                name={poke.name}
                key={poke.id}
                type1={poke.type1}
                type2={poke.type2}
                id={poke.id}
              />
            );
          })}
        {pokeCtx.isLoading && <LoadingSpinner />}
        {showDetail && (
          <PokemonDetail
            picUrl={picUrl}
            name={name}
            type1={type1}
            type2={type2}
            id={id}
          />
        )}
      </section>
    </main>
  );
};

export default Main;
