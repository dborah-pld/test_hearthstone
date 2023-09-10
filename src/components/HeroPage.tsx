import { Divider, RedBG, WoodBG } from "../images";
import { useNavigate, useParams } from "react-router-dom";
import { ClassesMapping } from "../utils/interface";
import Button from "./Button";
import { useGlobalContext } from "../context/globalContext";

import { useDeckActions, useDeckStore } from "../store/deckStore";
import { useEffect } from "react";
import SearchModal from "./SearchModal";

export default function HeroPage() {
  const { className } = useParams<{ className: string }>();
  const { searchCard, setSearchCard } = useGlobalContext();
  const navigate = useNavigate();

  const deck = useDeckStore((state) => state.decks[className!]);
  const { clearDeck, removeFromDeck } = useDeckActions();

  const deckImg = ClassesMapping.find((hero) => hero.fr === className)?.imgDeck;

  useEffect(() => {
    console.log(deck);
  }, [deck]);

  return (
    <div
      className="min-h-screen relative pb-10"
      style={{ background: `url(${RedBG}) center center / cover` }}
    >
      <header
        className="flex justify-center items-center space-x-10 py-10 w-full"
        style={{ background: `url(${WoodBG}) center center / cover no-repeat` }}
      >
        <img src={deckImg} alt={className} className="w-[150px]" />
        <div className="flex flex-col space-y-5">
          <p className="belweBold text-2xl text-hs-beige">Deck {className}</p>
          <div className="flex justify-center items-center space-x-3">
            <Button
              onClick={() => setSearchCard(true)}
              title="Ajouter une carte"
              bgColor="bg-lime-600"
              disabled={deck && deck.length === 30}
            />
            <Button
              onClick={() => clearDeck(className!)}
              title="Supprimer le deck"
              bgColor="bg-red-800"
              disabled={!deck || deck.length === 0}
            />
          </div>
        </div>
      </header>
      <img src={Divider} alt="hearthstone" />
      <div className="my-5 pl-14">
        <Button
          onClick={() => {
            navigate(`/`);
          }}
          title="Retour"
          bgColor="bg-hs-purple"
        />
      </div>
      {searchCard && className && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <SearchModal heroClass={className} />
        </div>
      )}
      {!deck || deck.length === 0 ? (
        <p className="text-center mt-10 text-hs-beige">
          Vous n'avez pas encore de carte dans ce deck.
        </p>
      ) : (
        <div className="flex flex-wrap justify-start px-10">
          {deck.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12%] mb-5"
            >
              <img className="w-full" src={card.img} alt={card.name} />
              {!card.img && <p>{card.text}</p>}
              <Button
                bgColor="bg-red-800"
                title="Supprimer"
                onClick={() => removeFromDeck(className!, card.name)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
