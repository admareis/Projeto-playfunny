import { Link } from "react-router-dom";
import mascote from "../assets/mascote.png";
import playfunny from "../assets/playfunny.png"; // imagem da palavra "PlayFunny"
import conta from "../assets/conta.png";

function Header() {
  return (
    <header className="bg-sky-100 py-4">
      <div className="flex items-center justify-between px-8">
        <img src={mascote} alt="mascote PlayFunny" className="h-16 w-16 rounded-full object-cover" />

        <div className="flex flex-col items-center gap-3">
          <img src={playfunny} alt="PlayFunny" className="h-14 w-80 object-contain" />
          <nav className="flex gap-6 text-sm">
            <span>Navegue por categoria:</span>
            <Link to="/categoria/competitivo" className="hover:underline">Competitivo</Link>
            <Link to="/categoria/cooperativo" className="hover:underline">Cooperativo</Link>
            <Link to="/categoria/pra-galera" className="hover:underline">Pra galera</Link>
            <Link to="/categoria/pra-familia" className="hover:underline">Pra família</Link>
          </nav>
        </div>

        <Link to="/conta" className="flex flex-col items-center text-xs">
          <img src={conta} alt="conta" className="h-14 w-14 rounded-full object-cover" />
          <span>acesse a sua conta</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;