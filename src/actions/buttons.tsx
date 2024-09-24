import { h, FC, BaseProps } from "tsx-dom";

import potter_map from "/potter-map.svg"

import { MemoryGame } from "../components/memory-game.tsx";
import { unfold_card, fold_card, handle_card_check, } from "../actions/cards.tsx";
import { BOARD_STATE } from "../state.tsx";
import { BirthdayGift } from "../components/birthday-gift.tsx";

export function update_interaction_box_with_element(new_child: JSX.Element) {
  const target = document.getElementById("interaction-box") as HTMLDivElement;

  while (target.firstChild) {
    target.removeChild(target.lastChild);
  }

  // const new_element = (<MemoryGame />);
  // console.log('new_element', new_element);
  console.log('new_child', new_child);

  target.appendChild(new_child);
}

export function load_birthday_gift(this: HTMLElement, event: Event) {
  event.preventDefault();

  const new_element = (<BirthdayGift />);
  console.log('new_element', new_element);

  update_interaction_box_with_element(new_element);
}

export function load_memory_game(this: HTMLElement, event: Event) {
  event.preventDefault();
  const target = document.getElementById("interaction-box") as HTMLDivElement;

  while (target.firstChild) {
    target.removeChild(target.lastChild);
  }

  const new_element = (<MemoryGame />);
  console.log('new_element', new_element);

  target.appendChild(new_element);
}

export function handle_card_unfold(event: Event) {
  event.stopPropagation();
  let event_element = event.target as Element;

  let card_id = event_element.getAttribute("data-card-id") || "none";
  console.log('[handle_card_unfold] handler card_id', card_id);

  if (BOARD_STATE.locked || BOARD_STATE.pinned_cards.get(card_id)) {
    return
  }

  if (!BOARD_STATE.first_card) {
    //
    BOARD_STATE.first_card = card_id;
    unfold_card(card_id);
  } else if (BOARD_STATE.first_card && !BOARD_STATE.second_card) {

    if (card_id == BOARD_STATE.first_card) {
      console.log('[handle_card_unfold] card already selected',);
      return
    }

    BOARD_STATE.second_card = card_id;
    BOARD_STATE.pinned_cards.set(BOARD_STATE.first_card, true);
    BOARD_STATE.pinned_cards.set(BOARD_STATE.second_card, true);
    BOARD_STATE.locked = true;

    unfold_card(card_id);

    // let is_match = check_card_match();
    // console.log('[handle_card_unfold] is_match', is_match);
    handle_card_check()
  }

  console.log('[handle_card_unfold] BOARD_STATE', BOARD_STATE);
}

export function handle_card_fold(event: Event) {
  event.stopPropagation();
  let event_element = event.target as Element;

  let card_id = event_element.getAttribute("data-card-id") || "none";
  console.log('[handle_card_fold] handler card_id', card_id);

  if (BOARD_STATE.locked || BOARD_STATE.pinned_cards.get(card_id)) {
    return
  }

  fold_card(card_id)
}
