import { ReactElement, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchCardByName } from "../hooks/queries";
import { Card, ClassesMapping } from "../utils/interface";
import Button from "./Button";
import { BeigeBG } from "../images";
import Loader from "./Loader";
import { useDeckActions, useDeckStore } from "../store/deckStore";
import { useGlobalContext } from "../context/globalContext";

interface Props {
  heroClass: string;
}

const SearchModal = ({ heroClass }: Props): ReactElement => {
  const { setSearchCard } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const searchCardQuery = useSearchCardByName(searchValue);
  const { register, handleSubmit } = useForm<{ search: string }>();
  const deck = useDeckStore((state) => state.decks[heroClass]);
  const { addToDeck } = useDeckActions();

  const playerClassName = ClassesMapping.find(
    (hero) => hero.fr === heroClass
  )?.en;

  const onSubmit: SubmitHandler<{ search: string }> = (data) => {
    setSearchValue(data.search);
  };

  const searchedCard = useMemo(() => {
    let card: Card;
    if (searchCardQuery.data) {
      let completeCard = searchCardQuery.data.find(
        (card) =>
          (card.cardSet === "Vanilla" || card.cardSet === "Core") && !!card.img
      );
      card = completeCard ?? searchCardQuery.data[0];
      if (
        card.playerClass === "Neutral" ||
        card.playerClass === playerClassName
      ) {
        return card;
      }
    }
  }, [searchCardQuery.data, playerClassName]);

  return (
    <form
      className="px-7 py-5 rounded-md shadow-md h-[450px] relative"
      style={{ background: `url(${BeigeBG}) center center / cover no-repeat` }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        onClick={() => setSearchCard(false)}
        className="absolute top-1 right-3 cursor-pointer font-bold text-hs-purple"
      >
        X
      </div>
      <div className="flex items-center justify-center space-x-4">
        <input
          className="rounded-md h-10 px-2 w-60 focus:outline-none shadow-sm text-hs-purple"
          type="text"
          placeholder="Rechercher une carte..."
          {...register("search")}
        />
        <Button bgColor="bg-hs-purple" title="Rechercher" type="submit" />
      </div>
      {searchCardQuery.isLoading && (
        <div className="flex h-full items-center justify-center">
          <Loader />
        </div>
      )}
      {searchCardQuery.isSuccess && searchedCard && (
        <div className="flex flex-col w-full items-center justify-center space-y-3 relative">
          <img
            className="h-[300px]"
            src={searchedCard.img}
            alt={searchedCard.name}
          />
          {!searchedCard.img && (
            <p className="absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {searchedCard.text}
            </p>
          )}
          <Button
            bgColor="bg-lime-600"
            title="Ajouter"
            onClick={() => addToDeck(heroClass, searchedCard)}
            disabled={deck && deck.length === 30}
          />
        </div>
      )}
      {searchCardQuery.isError && (
        <div className="flex h-full items-center justify-center">
          <p className="text-hs-red">Une erreur est survenue.</p>
        </div>
      )}
    </form>
  );
};

export default SearchModal;
