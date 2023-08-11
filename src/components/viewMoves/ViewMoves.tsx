import React from "react";
import "./ViewMoves.scss";
import { IMoves } from "../../interfaces/moves-interface";

interface IProps {
  data: any;
}

const ViewMoves: React.FC<IProps> = ({ data }) => {
  return (
    <div className="container">
      <div>
        <h4>Moves</h4>
        <div className="move-list">
          {data?.moves?.map((item: IMoves, idx: number) => (
            <div className="move" key={idx}>{item.move.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMoves;
