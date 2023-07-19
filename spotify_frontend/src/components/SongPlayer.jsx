import React, { useState } from "react";
import {
  back,
  forward,
  green_indicator,
  pause,
  pc,
  play,
  playlist,
  repeat,
  repeat_on,
  shuffle,
  shuffle_on,
  volume,
} from "../assets";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const SongPlayer = () => {
  const [playerValue, setPlayerValue] = useState(20);
  const [volumeValue, setVolumeValue] = useState(50);

  const [paused, setPaused] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [shuffleOn, setShuffleOn] = useState(false);

  const handleVolume = (event, value) => {
    setVolumeValue(value);
  };

  const handleChange = (event, number) => {
    setPlayerValue(number);
  };

  const handleShuffle = () => {
    setShuffleOn(!shuffleOn);
  };

  const handleRepeat = () => {
    setRepeatOn(!repeatOn);
  };

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <div>
      <div className=" flex flex-row items-center justify-between px-10 py-2 h-[100px] w-full bottom-0 left-0 right-0 bg-playerColor fixed ">
        <div className=" flex flex-row items-center justify-start w-[300px]">
          <img
            className="w-[59px] h-[60px] shadow"
            src="https://via.placeholder.com/59x60"
          />
          <div className=" flex flex-col leading-tight ml-5 items-start justify-between">
            <h2 className=" text-white text-[15px]">Hold On</h2>
            <h5 className=" opacity-60 text-white text-[12px]">
              Justin Bieber
            </h5>
          </div>
        </div>
        <div className=" flex flex-1 flex-col mt-2 items-center justify-end">
          <div className=" flex flex-row items-center justify-center">
            <div className=" flex flex-col items-center justify-around">
              <img
                onClick={handleShuffle}
                src={shuffleOn ? shuffle_on : shuffle}
                alt="next icon"
                className=" w-[34px] h-[34px] mx-2 object-contain "
              />
              {/* <img src={shuffleOn ? null : green_indicator} alt="" className=" object-contain w-[3px] h-[3px]" /> */}
            </div>
            <img
              src={back}
              alt="next icon"
              className=" w-[34px] h-[34px]  mx-2 object-contain"
            />
            <img
              onClick={handlePlayPause}
              src={paused ? pause : play}
              alt="next icon"
              className=" w-[34px] h-[34px] object-contain mx-2"
            />
            <img
              src={forward}
              alt="next icon"
              className=" w-[34px] h-[34px]  mx-2 object-contain"
            />
            <img
              onClick={handleRepeat}
              src={repeatOn ? repeat_on : repeat}
              alt="next icon"
              className=" w-[34px] h-[34px]  mx-2 object-contain"
            />
          </div>
          <div className=" w-[700px] flex flex-row items-center">
            <ProgressSlider
              className="flex-1 mx-2"
              valueLabelDisplay="off"
              aria-label="pretto slider"
              value={playerValue}
              onChange={handleChange}
            />
            <h2 className=" text-textGrey text-[12px]">{playerValue}</h2>
          </div>
        </div>
        <div className=" flex flex-row items-center justify-end w-[300px]">
          <img
            src={playlist}
            alt="playlist"
            className="w-[16px] h-[12px] object-contain mx-3"
          />
          <img
            src={pc}
            alt="connet to pc"
            className="w-[20px] h-[20px] object-contain mx-3"
          />
          <img
            src={volume}
            alt="volume"
            className="w-[24px] h-[24px] object-contain mx-3"
          />
          <div className="w-[100px]">
            <ProgressSlider
              className="w-[100px]"
              valueLabelDisplay="off"
              aria-label="pretto slider"
              value={volumeValue}
              onChange={handleVolume}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//
const ProgressSlider = styled(Slider)({
  color: "#B3B3B3",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
    width: 1,
  },
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    border: "currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(179, 179, 179, 0.2)",
    },
    "&:focus": {
      boxShadow: "0 0 0 8px rgba(179, 179, 179, 0.2)",
    },
  },
});

export default SongPlayer;
