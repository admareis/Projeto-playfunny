import { Link } from "react-router-dom";
import mascote from "../assets/imgs/LOGO.jpeg";
import playfunny from "../assets/imgs/nomemarca.png";
import carrinho from "../assets/imgs/meepleazul.jpg";
import conta from "../assets/imgs/Pink_meeple_waving_happily_c5de8c69.jpg";

function Header() {
  return (
    <header className="bg-sky-100 py-4">
      <div className="flex items-center justify-between px-8">
        <img src={mascote} alt="mascote PlayFunny" className="h-30 w-30 rounded-full object-cover" />

        <div className="flex flex-col items-center gap-3">
          <img src={playfunny} alt="PlayFunny" className="h-20 w-100 object-contain" />
          <nav className="flex gap-6 text-base">
            <span>Navegue por categoria:</span>
            <Link to="#competitivo" className="hover:underline">Competitivo</Link>
            <Link to="#cooperativos" className="hover:underline">Cooperativo</Link>
            <Link to="#pra-galera" className="hover:underline">Pra galera</Link>
            <Link to="#pra-familia" className="hover:underline">Pra família</Link>
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <Link to="/carrinho" className="flex flex-col items-center gap-1 text-base">
            <img src={carrinho} alt="carrinho" className="h-14 w-14 rounded-full object-cover" />
            <span>Carrinho</span>
          </Link>


          <Link to="/conta" className="flex flex-col items-center gap-1 text-base"> 
          <img src={conta} alt="carrinho" className="h-14 w-14 rounded-full object-cover" />           
            <span>Acesse sua conta</span>
          </Link>

          
        </div>
      </div>
    </header>
  );
}

export default Header;