import { Card } from "../utils/interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DeckStore {
  decks: Record<string, Card[]>;
  actions: {
    addToDeck: (deckName: string, card: Card) => void;
    clearDeck: (deckName: string) => void;
    removeFromDeck: (deckName: string, cardName: string) => void;
  };
}

export const useDeckStore = create<DeckStore>()(
  persist(
    (set, get) => ({
      decks: {},
      actions: {
        addToDeck: (deckName, card) => {
          const currentDeck = get().decks[deckName] || [];
          const isCardAlreadyInDeck = currentDeck.some(
            (existingCard) => existingCard.name === card.name
          );

          const isDeckFull = currentDeck.length === 30;

          if (!isCardAlreadyInDeck && !isDeckFull) {
            const updatedDeck = [...currentDeck, card];
            set({ decks: { ...get().decks, [deckName]: updatedDeck } });
          }
        },
        clearDeck: (deckName) => {
          set({ decks: { ...get().decks, [deckName]: [] } });
        },
        removeFromDeck: (deckName, cardName) => {
          const currentDeck = get().decks[deckName] || [];
          const updatedDeck = currentDeck.filter(
            (card) => card.name !== cardName
          );
          set({ decks: { ...get().decks, [deckName]: updatedDeck } });
        },
      },
    }),
    {
      name: "hearthstone-decks",
      partialize: (state) => ({ decks: state.decks }),
    }
  )
);

export const useDecks = () => useDeckStore((state) => state.decks);
export const useDeckActions = () => useDeckStore((state) => state.actions);
