import { h, FC, BaseProps } from "tsx-dom";

import { MemoryGameCellDynamic, } from "../components/memory-game.tsx";
import { handle_card_unfold, handle_card_fold } from "../actions/buttons.tsx";
import { LOCKED_BOARD, BOARD_STATE } from "../state.tsx";

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

import { CURRENT_FIGURES_MAP, CELL_LISTENERS } from "../state.tsx";

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

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={figure} pinned={false} click={handle_card_fold} />);
  // BOARD_STATE.locked = !BOARD_STATE.locked;
  //
  // if (BOARD_STATE.first_card) {
  //   BOARD_STATE.second_card = card_id;
  //   BOARD_STATE.locked = !BOARD_STATE.locked;
  //   console.log('BOARD_STATE', BOARD_STATE);
  // } else {
  //   BOARD_STATE.first_card = card_id;
  //   BOARD_STATE.locked = !BOARD_STATE.locked;
  //   console.log('BOARD_STATE', BOARD_STATE);
  // }
}

export function fold_card(card_id: string) {
  //
  let card_element = document.getElementById(card_id || "none");

  console.log('-------DEBUG (unfold_card)-------');
  console.log('raw card_element', card_element);

  while (card_element?.firstChild) {
    card_element.removeChild(card_element.lastChild);
  }

  // let listener = handle_card_unfold;
  //
  // CELL_LISTENERS.set(card_id, listener);
  // console.log('CELL_LISTENERS', CELL_LISTENERS);

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={Figure.Back} pinned={false} click={handle_card_unfold} />);
}

export function pin_card(card_id: string) {
  console.log('pinning card ' + card_id);
  let card = document.getelementbyid(card_id + 'img');

  card?.setattribute("data-card-pinned", true);
}

export function unpin_card(card_id: string) {
  console.log('pinning card ' + card_id);
  let card = document.getelementbyid(card_id + 'img');

  card?.setattribute("data-card-pinned", false);
}
