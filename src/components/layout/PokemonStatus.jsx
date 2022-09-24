import React from "react";

const PokemonStatus = (props) => {
  return (
    <div className="w-full flex items-center justify-between mt-2 font-[Lato]">
      <div className="w-64">
        {props.title}
      </div>
      <div className="mr-3">
        {props.status}
      </div>

      <div className="w-3/4 dark:bg-gray-600 bg-gray-200 h-1">
        <div
          className="bg-blue-600 h-1"
          style={{
            width: `${Math.floor((props.status / props.sumBaseStats) * 100)}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PokemonStatus;
