import React from "react";
import { Link } from "react-router-dom";

const SongCard = (props) => {
  return (
    <Link to={`/playlist/${props.name}`}>
      <div>
        <div className="w-[190px] h-[270px] rounded bg-tab hover:bg-tabHover transition ease-in-out duration-300 flex flex-col justify-center items-center p-4 m-2">
          <img
            className="w-[158px] h-[158px] shadow"
            src={props.image}
          />
          <div className="mt-2 w-[160px]">
            <h2 className=" text-white font-bold text-[16px]">{props.name}</h2>
            <h5 className=" text-[14px] text-textGrey">
              {props.desc}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
