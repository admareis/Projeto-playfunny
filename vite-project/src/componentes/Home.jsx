import videoBanner from "../assets/imgs/Family_opening_board_game_20260919151526.mp4";

function Home() {
  return (
    <>
      <section className="w-full overflow-hidden bg-[#d9d9d9]">
        <div className="h-full w-full object-cover">
          <video
            src={videoBanner} autoPlay muted loop playsInline className="h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Home;