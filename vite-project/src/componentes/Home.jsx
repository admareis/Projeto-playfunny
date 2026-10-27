import Header from "./Header";
import video from "../assets/imgs/Family_opening_board_game_20260919151526.mp4";
import Produtos from "./Produtos";



function Home() {
  return (
    <>
      <Header />
      <main className="video">
        <video autoPlay loop muted className="w-full h-auto">
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </main>
      <Produtos />
    </>
  );
}

export default Home;
