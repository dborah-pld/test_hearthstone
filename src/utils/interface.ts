import {
  DH_deck,
  DK_deck,
  Druid_deck,
  Hunter_deck,
  Mage_deck,
  Paladin_deck,
  Priest_deck,
  Rogue_deck,
  Shaman_deck,
  Warlock_deck,
  Warrior_deck,
  DK,
  DH,
  Druid,
  Hunter,
  Mage,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior,
} from "../images";

export interface Card {
  img?: string;
  name: string;
  playerClass: string;
  cardSet: string;
  text: string;
}

export const ClassesMapping = [
  { img: DK, imgDeck: DK_deck, fr: "Chevalier de la mort", en: "Death knight" },
  { img: DH, imgDeck: DH_deck, fr: "Chasseur de démons", en: "Demon hunter" },
  { img: Druid, imgDeck: Druid_deck, fr: "Druide", en: "Druid" },
  { img: Hunter, imgDeck: Hunter_deck, fr: "Chasseur", en: "Hunter" },
  { img: Mage, imgDeck: Mage_deck, fr: "Mage", en: "Mage" },
  { img: Paladin, imgDeck: Paladin_deck, fr: "Paladin", en: "Paladin" },
  { img: Priest, imgDeck: Priest_deck, fr: "Prêtre", en: "Priest" },
  { img: Rogue, imgDeck: Rogue_deck, fr: "Voleur", en: "Rogue" },
  { img: Shaman, imgDeck: Shaman_deck, fr: "Chaman", en: "Shaman" },
  { img: Warlock, imgDeck: Warlock_deck, fr: "Démoniste", en: "Warlock" },
  { img: Warrior, imgDeck: Warrior_deck, fr: "Guerrier", en: "Warrior" },
];
