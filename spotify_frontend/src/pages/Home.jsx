import SideNav from "../components/SideNav";
import SongTab from "../components/SongTab";
import SongCard from "../components/SongCard";
import SongPlayer from "../components/SongPlayer";
import ArtistCard from "../components/ArtistCard";

const Home = (props) => {

  const songTab = [
    {
      id: 1,
      image: "https://via.placeholder.com/84x84",
      name: "Sizzling songs",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/84x84",
      name: "Pop Up right now",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/84x84",
      name: "Gym Songs",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/84x84",
      name: "Do it Right Now",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/84x84",
      name: "Games songs",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/84x84",
      name: "Pump up",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/84x84",
      name: "Coding Beats",
    },
  ];
  const artistCard = [];
  return (
    <div>
      <div className=" flex bg-gradient-to-b from-neutral-800 to-black ">
        <SideNav />
        <div className="flex align-middle flex-1 flex-col overflow-y-auto">
          <div className="text-white text-[32px] font-bold leading-9 px-10 py-8">
            Good afternoon
          </div>
          <div className=" grid  2xl:grid-cols-4 grid-cols-3 gap-2 px-10">
            {songTab.map((item) => {
              return (
                <SongTab key={item.id} image={item.image} name={item.name} />
              );
            })}
          </div>
          <div className="text-white text-[24px] font-bold leading-9 px-10 py-8">
            Recently Played
          </div>
          <div className="flex flex-row overflow-x-auto px-10 justify-evenly">
            {props.songCard.map((item) => {
              return (
                <SongCard key={item.id} image={item.image} name={item.name} desc={item.desc} />
              );
            })}
          </div>
          <div className="text-white text-[24px] font-bold leading-9 px-10 py-8">
            Just the Hits
          </div>
          <div className="flex flex-row items-start overflow-x-auto px-10 justify-evenly">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </div>
        <SongPlayer />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
