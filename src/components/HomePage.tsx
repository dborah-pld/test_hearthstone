import { Logo, HomeBG } from "../images";
import HeroTile from "./HeroTile";
import { useNavigate } from "react-router-dom";
import { useDecks } from "../store/deckStore";
import { ClassesMapping } from "../utils/interface";

export default function HomePage() {
  const navigate = useNavigate();
  const decks = useDecks();

  return (
    <div style={{ background: `url(${HomeBG}) center center / cover` }}>
      <div className="container mx-auto min-h-screen pb-5">
        <header className="flex flex-col items-center">
          <img src={Logo} alt="hearthstone" className="w-[300px]" />
          <div className="text-hs-purple text-center">
            <span className="belweBold text-xl">
              Bienvenue dans l'auberge !
            </span>
            <p>
              Retrouvez ici vos decks favoris pour chaque classe de héros,
              consultez et modifiez-les à votre guise.
            </p>
            <p>Bon deck-building !</p>
          </div>
        </header>
        <div className="flex flex-wrap w-full justify-center mt-10 space-x-2">
          {ClassesMapping.map((hero, index) => {
            const heroDeck = decks[hero.fr] || [];
            return (
              <HeroTile
                key={index}
                cardAmount={heroDeck.length}
                img={hero.img}
                name={hero.fr}
                onClick={() => {
                  navigate(`/classe/${hero.fr}`);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
