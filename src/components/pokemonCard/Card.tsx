import React from "react";
import "./Card.scss";
import useCallAxios from "../../hooks/axios";

interface IProps {
  name: string;
  image?: string;
  url: string;
}

const Card: React.FC<IProps> = ({ name, image, url }) => {
  const { data: pokemon } = useCallAxios(url);

  return (
    <div className="pokemon-card">
      <img
        src={image ? image : url ? pokemon?.sprites?.front_default : ""}
        alt="pokemon"
      />

      <div>{name && name}</div>
    </div>
  );
};

export default Card;
