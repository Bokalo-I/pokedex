//@ts-nocheck

import React from "react";
import { useParams } from "react-router-dom";
import useCallAxios from "../hooks/axios";
import Card from "../components/pokemonCard/Card";
import ViewStats from "../components/viewStats/ViewStats";
import ViewMoves from "../components/viewMoves/ViewMoves";

const ViewCharacter = () => {
  const { id } = useParams();

  const { data: pokemon } = useCallAxios(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  return (
    <div>
      <Card image={pokemon?.sprites?.front_default} />
      <h1>{pokemon?.name}</h1>
      <ViewMoves data={pokemon} />
      <ViewStats data={pokemon} />
    </div>
  );
};

export default ViewCharacter;
