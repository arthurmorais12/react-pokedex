import React, { useState, useCallback, useReducer } from "react";

const PokemonContext = React.createContext({
  isLoading: true,
  pokeDetail: {
    picUrl: "",
    name: "",
    type1: "",
    type2: "",
    id: "",
    hp: "",
    attack: "",
    defense: "",
    special_attack: "",
    special_defense: "",
    speed: "",
    showDetail: false,
  },
  onShowDetail: () => {},
  unShowDetail: () => {},
  fetchPokemons: () => {},
  allPokemons: [
    {
      id: "",
      picUrl: "",
      name: "",
      type1: "",
      type2: "",
    },
  ],
  limit: 0,
  offset: 151,
  changeExibition: (start, end) => {},
  pokesFiltered: [{}],
  changeFiltered: () => {},
});

const pokemonDetailReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DETAIL":
      return {
        picUrl: action.payload.picUrl,
        name: action.payload.name,
        type1: action.payload.type1,
        type2: action.payload.type2,
        id: action.payload.id,
        hp: action.payload.hp,
        attack: action.payload.attack,
        defense: action.payload.defense,
        special_attack: action.payload.special_attack,
        special_defense: action.payload.special_defense,
        speed: action.payload.speed,
        showDetail: true,
      };
    case "REMOVE_DETAIL":
      return {
        picUrl: "",
        name: "",
        type1: "",
        type2: "",
        id: "",
        hp: "",
        attack: "",
        defense: "",
        special_attack: "",
        special_defense: "",
        speed: "",
        showDetail: false,
      };
    default:
      return {
        picUrl: "",
        name: "",
        type1: "",
        type2: "",
        id: "",
        hp: "",
        attack: "",
        defense: "",
        special_attack: "",
        special_defense: "",
        speed: "",
        showDetail: false,
      };
  }
};

export const PokemonProvider = (props) => {
  const [allPokemons, setAllPokemons] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(151);
  const [offset, setOffset] = useState(0);
  const [pokesFiltered, setPokesFiltered] = useState([{}]);
  const [isFiltered, setIsFiltered] = useState(false);

  const [pokeDetail, dispatchPokeDetail] = useReducer(pokemonDetailReducer, {
    picUrl: "",
    name: "",
    type1: "",
    type2: "",
    id: "",
    showDetail: false,
  });

  const changeFiltered = (string) => {
    if (string) {
      setIsFiltered(true);
      setPokesFiltered(
        allPokemons.filter((poke) => {
          return poke.name.startsWith(string.toLowerCase());
        })
      );
    } else {
      setIsFiltered(false);
    }
  };

  const changeExibition = (offset, limit) => {
    setLimit(limit);
    setOffset(offset);
  };

  const fetchPokemons = useCallback(async (startPoke, endPoke) => {
    setIsLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${startPoke}&offset=${endPoke}`
    );
    const data = await response.json();

    const pokeArr = await Promise.all(
      data.results.map(async (poke) => {
        const response = await fetch(poke.url);
        const data = await response.json();
        return {
          id: data.id,
          picUrl: data.sprites.front_default,
          name: poke.name,
          type1: data.types[0].type.name,
          type2: data.types[1] ? data.types[1].type.name : "",
        };
      })
    );
    setAllPokemons(pokeArr);
    setIsLoading(false);
  }, []);

  const onShowDetail = async (obj) => {
    setIsLoading(true)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${obj.id}`)
    const data = await response.json()

    dispatchPokeDetail({
      type: "SHOW_DETAIL",
      payload: {
        picUrl: obj.picUrl,
        name: obj.name,
        type1: obj.type1,
        type2: obj.type2,
        id: obj.id,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      },
    });

    setIsLoading(false)
  };

  const unShowDetail = () => {
    dispatchPokeDetail({ type: "REMOVE_DETAIL" });
  };

  return (
    <PokemonContext.Provider
      value={{
        fetchPokemons,
        allPokemons,
        isLoading,
        limit,
        offset,
        changeExibition,
        pokesFiltered,
        changeFiltered,
        isFiltered,
        pokeDetail,
        onShowDetail,
        unShowDetail,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
