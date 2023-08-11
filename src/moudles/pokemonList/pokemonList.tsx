import React, { useEffect, useState } from "react";
import "./pokemonList.scss";
import { useNavigate } from "react-router-dom";
import { PokeI } from "../../interfaces/pokemon-list-interface";
import Pagination from "../../common/pagination";
import useCallAxios from "../../hooks/axios";
import Card from "../../components/pokemonCard/Card";
import TextInput from "../../components/inputs/textInput/TextInput";
const PokemonList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [allPokemons, setAllPokemons] = useState<any>();
  const navigate = useNavigate();
  const {
    data: pokemons,
    isLoading,
    error,
    gotoNextPage,
    gotoPrevPage,
  } = useCallAxios(`https://pokeapi.co/api/v2/pokemon`);

  const goToCharacter = ({ name }: { name: string }) => {
    navigate("/view" + `/${name}`);
  };

  const handleSearch = (text: string) => {
    setSearchValue(text);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="filter-nav">
        <Pagination gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />

        <TextInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          placeholder="Search ..."
          value={searchValue}
        />
      </div>
      <div className="pokemon-list">
        {pokemons?.results
          ?.filter((pokemon: any) => pokemon.name.includes(searchValue))
          .map((p: PokeI, idx: number) => (
            <div key={idx} onClick={() => goToCharacter({ name: p.name })}>
              <Card name={p.name} url={p.url} />
            </div>
          ))}
      </div>
      <Pagination gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage} />
    </div>
  );
};

export default PokemonList;
