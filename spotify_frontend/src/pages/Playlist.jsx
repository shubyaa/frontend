import SideNav from "../components/SideNav";
import SongPlayer from "../components/SongPlayer";
import PlaylistTable from "../components/PlaylistTable";
import Color from "color-thief-react";

const Playlist = (props) => {
  const imageUrl = props.image;

  return (
    <div>
      <div>
        <Color src={imageUrl} crossOrigin="anonymous" format="hex">
          {({ data, loading }) => {
            if (loading) {
              return (
                <div className="text-[25px] font-bold text-white fllex items-center w-full h-full bg-black">
                  The Color is Loading
                </div>
              );
            } else {
              // setBgColor(data);
              // navigate(0);

              console.log("The color is : ----", data.toString());

              return (
                <div
                  style={{ background: `linear-gradient(${data}, black)` }}
                  className={`flex `}
                >
                  <SideNav />
                  <div className="flex align-middle flex-1 flex-col overflow-y-auto ">
                    <div className="px-10 py-8 flex flex-row mt-20  h-[300px]">
                      <img
                        className="w-[230px] h-[230px] object-cover"
                        src={imageUrl}
                      />
                      <div className=" flex flex-col ml-8 items-start justify-start">
                        <h5 className=" text-[13px] text-white">PLAYLIST</h5>
                        <h2 className=" text-white font-black text-[90px]">
                          {props.title}
                        </h2>
                        <h5 className=" opacity-70 text-[15px] text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Rhoncus
                        </h5>
                        <div className=" flex flow-row items-center">
                          <span className=" text-white font-bold text-[15px]">
                            Spotify
                          </span>
                          <div className="w-2 h-2 opacity-70 bg-white rounded-full mx-2" />
                          <h5 className=" opacity-70 text-[15px] text-white">
                            860,305 likes
                          </h5>
                          <div className="w-2 h-2 opacity-70 bg-white rounded-full mx-2" />
                          <h5 className=" opacity-70 text-[15px] text-white">
                            860,305 likes
                          </h5>
                        </div>
                      </div>
                    </div>
                    <PlaylistTable songsList={props.songList} />
                  </div>
                </div>
              );
            }
          }}
        </Color>

        <div>
          <SongPlayer />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
