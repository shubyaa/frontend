import React, { useState } from "react";
import {
  clock,
  list_play,
  thumb_play,
  heart_outlined,
  more,
  heart_filled,
} from "../assets";

const PlaylistTable = (props) => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-listBg via-black  to-black flex-1 w-full h-full">
        <div className=" flex flex-row px-7 py-5 items-center">
          <img
            src={thumb_play}
            alt="play_green"
            className="w-[55px] h-[55px] object-contain mr-4"
            crossOrigin="Anonymous"
          />
          <img
            src={heart_outlined}
            alt="play_green"
            className="h-[46px] w-[46px] object-contain"
          />
          <img
            src={more}
            alt="play_green"
            className="h-[46px] w-[46px] object-contain"
          />
        </div>
        <div className="px-7 py-5">
          <table className="table-auto w-full text-start mb-28">
            <thead className=" text-left align-middle text-textGrey border-b-2 border-cardHover border-collapse">
              <tr className=" font-normal capitalize ">
                <th># TITLE</th>
                <th>ALBUM</th>
                <th>DATE ADDED</th>
                <th>
                  <img
                    src={clock}
                    alt="clock"
                    className=" block ml-auto mr-auto  w-[16px] h-[16px] object-contain"
                  />
                </th>
              </tr>
            </thead>

            <tbody>
              {props.songsList?.map((item) => {
                const [liked, setLiked] = useState(item.isLiked);

                return (
                  <tr
                    key={item.id}
                    className=" text-white hover:file:rounded hover:bg-listHover transition ease-in-out group"
                  >
                    <td>
                      <div className="px-3 py-3 flex flex-row items-center mx-2 ">
                        <div className=" relative mx-2">
                          <h2 className="w-[14px] h-[14px] group-hover:hidden block text-textGrey">
                            {item.id}
                          </h2>
                          <img
                            src={list_play}
                            alt=""
                            className=" group-hover:block hidden transition ease-in-out w-[14px] h-[14px] object-contain"
                          />
                        </div>

                        <img
                          src={item.image}
                          alt=""
                          className="w-[40px] h-[40px] rounded object-contain bg-stone-300 mx-4 "
                        />
                        <div className="flex flex-col">
                          <h2 className=" text-white font-normal text-base text-[18px]">
                            {item.name}
                          </h2>
                          <h5 className="text-textGrey text-sm font-normal">
                            {item.author}
                          </h5>
                        </div>
                      </div>
                    </td>
                    <td className=" text-textGrey text-sm font-normal">
                      {item.album_name}
                    </td>
                    <td className=" text-textGrey text-sm font-normal">
                      {item.date_added}
                    </td>
                    <td>
                      <div className=" flex flow-row justify-center">
                        <img
                          src={liked ? heart_outlined : heart_filled}
                          onClick={() => {
                            if (liked) {
                              setLiked(!liked);
                            }else{
                                setLiked(!liked);
                            }
                          }}
                          alt="Like Button"
                          className=" w-6 h-6 object-contain mx-2"
                        />
                        <h5 className="text-textGrey text-sm font-normal">
                          {item.duration}
                        </h5>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTable;
