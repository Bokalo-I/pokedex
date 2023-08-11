import React from "react";
import { IStats } from "../../interfaces/stats-interface";

interface IProps {
  data: any;
}

const ViewStats: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      <div>
        <h4>Stats</h4>
        <div>
          {data?.stats?.map((item: IStats, idx: number) => (
            <div key={idx} style={{ display: "flex" }}>
              {item.stat.name}: {item.base_stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewStats;
