import { h, FC, BaseProps } from "tsx-dom";

import { MemoryGameCellDynamic, } from "../components/memory-game.tsx";
import { handle_card_unfold, handle_card_fold } from "../actions/buttons.tsx";

enum Figure {
  Blank = "blank",
  Back = "back",
  First = "first",
  Second = "second",
  Third = "third",
  Fourth = "fourth",
  Fifth = "fifth"
}

// import { Figure } from "../main.tsx";

import { CURRENT_FIGURES_MAP } from "../state.tsx";

export function unfold_card(card_id: string) {
  //
  console.log('card_id', card_id);
  let card_element = document.getElementById(card_id || "none");

  let figure = CURRENT_FIGURES_MAP.get(card_id || Figure.Blank);

  console.log('-------DEBUG (unfold_card - actions/cards)-------');
  console.log('raw card_element', card_element);

  while (card_element?.firstChild) {
    card_element.removeChild(card_element.lastChild);
  }

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={figure} click={handle_card_fold} />);
}

export function fold_card(card_id: string) {
  //
  let card_element = document.getElementById(card_id || "none");

  console.log('-------DEBUG (unfold_card)-------');
  console.log('raw card_element', card_element);

  while (card_element?.firstChild) {
    card_element.removeChild(card_element.lastChild);
  }

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={Figure.Back} click={handle_card_unfold} />);
}

