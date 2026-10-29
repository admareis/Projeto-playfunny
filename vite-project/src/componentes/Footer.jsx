import rodape from "../assets/imgs/Cartoon_stars_playing_board_game_20260930213301.jpg";

function Footer() {
  return (
    <footer className="bg-sky-100 px-8 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-center">
        <img
          src={rodape}
          alt="Mascotes da PlayFunny jogando"
          className="h-72 w-72 rounded-full object-cover"
        />

        <div className="text-sm leading-relaxed">
          <p className="font-semibold">Atendimento</p>
          <p><a href="tel:+551144444444" className="underline">(11) 4444-4444</a></p>
          <p><a href="https://wa.me/5511999999999" className="underline">(11) 99999-9999 (WhatsApp)</a></p>
          <p><a href="mailto:atendimentoplayfunny@gmail.com" className="underline">atendimentoplayfunny@gmail.com</a></p>
          <p>Horário de atendimento das 9h às 18h, de segunda a sábado</p>
          <p>(exceto feriados)</p>
        </div>

        <div className="text-sm">
          <p className="mb-2 font-semibold">Nossas redes sociais:</p>
          <div className="flex gap-3 text-xl">
            <a href="https://instagram.com" aria-label="Instagram">◎</a>
            <a href="https://youtube.com" aria-label="YouTube">◉</a>
            <a href="https://facebook.com" aria-label="Facebook">◌</a>
            <a href="https://x.com" aria-label="X">✕</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;