import React from "react";
import PokemonList from "../moudles/pokemonList/pokemonList";
import useCallAxios from "../hooks/axios";

function Home() {
  return (
    <>
      <PokemonList />
    </>
  );
}

export default Home;
