import { h, FC, BaseProps } from "tsx-dom";

import { MemoryGameCellDynamic, } from "../components/memory-game.tsx";
import { BirthdayGift } from "../components/birthday-gift.tsx";
import { handle_card_unfold, handle_card_fold, load_birthday_gift, update_interaction_box_with_element } from "../actions/buttons.tsx";
import { BOARD_STATE } from "../state.tsx";

enum Figure {
  Blank = "blank",
  Back = "back",
  First = "first",
  Second = "second",
  Third = "third",
  Fourth = "fourth",
  Fifth = "fifth"
}

import { CURRENT_FIGURES_MAP } from "../state.tsx";
import { MaraudersMap } from "../components/marauders-map.tsx";

export function unfold_card(card_id: string) {
  console.log('card_id', card_id);
  let card_element = document.getElementById(card_id || "none");

  let figure = CURRENT_FIGURES_MAP.get(card_id || Figure.Blank);

  console.log('-------DEBUG (unfold_card - actions/cards)-------');
  console.log('raw card_element', card_element);
  console.log('figure', figure);

  while (card_element?.firstChild) {
    card_element.removeChild(card_element.lastChild);
  }

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={figure} pinned={false} click={handle_card_fold} />);
  console.log('card_element after unfold', card_element);
}

export function fold_card(card_id: string) {
  let card_element = document.getElementById(card_id || "none");

  console.log('-------DEBUG (unfold_card)-------');
  console.log('raw card_element', card_element);

  while (card_element?.firstChild) {
    card_element.removeChild(card_element.lastChild);
  }

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={Figure.Back} pinned={false} click={handle_card_unfold} />);
}

export function pin_card(card_id: string) {
  console.log('pinning card ' + card_id);
  BOARD_STATE.pinned_cards.set(card_id, true);
}

export function unpin_card(card_id: string) {
  console.log('unpinning card ' + card_id);
  BOARD_STATE.pinned_cards.set(card_id, false);
}

export function check_card_match() {
  console.log('[check_card_match] CHECK_CARD_MATCH CALLED!');
  if (!BOARD_STATE.first_card || !BOARD_STATE.second_card) {
    console.log('[check_card_match] conly 1 card selected, not possible to check for match');
    return
  }

  let first_card_figure = CURRENT_FIGURES_MAP.get(BOARD_STATE.first_card);
  let second_card_figure = CURRENT_FIGURES_MAP.get(BOARD_STATE.second_card);

  console.log('[check_card_match] first_card_figure: ', first_card_figure);
  console.log('[check_card_match] second_card_figure: ', second_card_figure);

  if (first_card_figure == second_card_figure) {
    console.log('[check_card_match] CARDS MATCHES!!');
    return second_card_figure
  } else {
    console.log('[check_card_match] CARDS DOES NOT MATCH');
    return false
  }
}

export function handle_card_check(timeout = 750) {
  setTimeout(() => {
    let is_match = check_card_match();

    if (is_match) {
      //
      console.log('[handle_card_check] CARDS MATCH - RESET SELECTED CARDS, ADD FOUND FIGURE AND CONTINUE GAME');
      BOARD_STATE.matches_found.set(is_match, true);
    }
    reset_board();

    if (check_game_ended()) {
      handle_game_end();
    }
  }, timeout)
}

export function reset_pinned_cards() {
  for (const card_id of BOARD_STATE.pinned_cards.keys()) {
    BOARD_STATE.pinned_cards.set(card_id, false);
  }
}

export function reset_board() {
  BOARD_STATE.first_card = null;
  BOARD_STATE.second_card = null;
  BOARD_STATE.locked = false;

  reset_pinned_cards();

  for (const [card_id, figure] of CURRENT_FIGURES_MAP) {
    if (!BOARD_STATE.matches_found.get(figure)) {
      fold_card(card_id);
    }
  }
}

export function check_game_ended() {
  for (const [figure, found] of BOARD_STATE.matches_found) {
    if (!found) {
      console.log('figure', figure);
      return false
    }
  }

  return true
}

export function handle_game_end() {
  console.log('ALL FIGURES FOUND, GAME ENDED');
  // load_birthday_gift();
  // const new_element = (<MaraudersMap />);
  const new_element = (<BirthdayGift />);
  update_interaction_box_with_element(new_element);
}
