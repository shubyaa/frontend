import React from "react";

const SongTab = (props) => {
  return (
    <div>
      <div className=" w-[370px] flex flex-row pb-4 ">
        <img className="w-[84px] h-[84px] object-contain" src={props.image} />
        <div className=" bg-card hover:bg-cardHover transition ease-in-out duration-300 rounded-e flex flex-1 items-center justify-start">
          <h2 className=" text-white font-bold text-[16px] ml-5">
            {props.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SongTab;
