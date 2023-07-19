import React from "react";

const ArtistCard = () => {
  return (
    <div className=" mb-52">
      <div className="w-[190px] h-[270px] rounded bg-card hover:bg-tabHover transition ease-in-out duration-300 flex flex-col px-3 py-4 mr-3">
        <img
          className="w-[162px] h-[162px] object-contain rounded-full"
          src="https://via.placeholder.com/162x162"
        />
        <div className=" mt-3 mx-1 flex flex-col items-start">
        <h2 className=" text-white font-bold text-[16px]">Khalid</h2>
        <h5 className=" text-[14px] text-textGrey">
              Artist
            </h5>

        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
