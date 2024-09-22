import { h, FC, BaseProps } from "tsx-dom";

import { MemoryGame } from "../components/memory-game.tsx";
import { unfold_card, fold_card, pin_card } from "../actions/cards.tsx";
import { LOCKED_BOARD, BOARD_STATE } from "../state.tsx";

export function load_memory_game(this: HTMLElement, event: Event) {
  // let test_list = init_cell_list();
  // console.log('test_list: ', test_list);
  //
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

  // BOARD_STATE.locked = !BOARD_STATE.locked;
  // console.log('BOARD_STATE', BOARD_STATE);

  let isPinned = event_element.getAttribute("data-card-pinned");
  if (isPinned || BOARD_STATE.locked) {
    console.log('card is pinned or board is locked');
    console.log('isPinned', isPinned);
    console.log('BOARD_STATE.locked', BOARD_STATE.locked);
    return
  }


  let card_id = event_element.getAttribute("data-card-id") || "none";
  console.log('handler card_id', card_id);

  if (BOARD_STATE.first_card) {
    BOARD_STATE.second_card = card_id;
    BOARD_STATE.locked = true;
    console.log('[handle_card_unfold] BOARD_STATE', BOARD_STATE);
    unfold_card(card_id);
    // pin_card(card_id);
  } else {
    BOARD_STATE.first_card = card_id;
    BOARD_STATE.locked = false;
    console.log('[handle_card_unfold] BOARD_STATE', BOARD_STATE);
    unfold_card(card_id);
    // pin_card(card_id);
  }

  // unfold_card(card_id);
  // pin_card(card_id);
}

export function handle_card_fold(event: Event) {
  //
  event.stopPropagation();
  let event_element = event.target as Element;

  // BOARD_STATE.locked = !BOARD_STATE.locked;
  // console.log('BOARD_STATE', BOARD_STATE);

  let isPinned = event_element.getAttribute("data-card-pinned");
  if (isPinned || BOARD_STATE.locked) {
    console.log('card is pinned or board is locked');
    console.log('isPinned', isPinned);
    console.log('BOARD_STATE.locked', BOARD_STATE.locked);
    return
  }

  let card_id = event_element.getAttribute("data-card-id") || "none";
  console.log('handler card_id', card_id);

  if (BOARD_STATE.first_card == card_id) {
    BOARD_STATE.first_card = null;
    BOARD_STATE.locked = false;
    console.log('[handle_card_unfold] BOARD_STATE', BOARD_STATE);
    fold_card(card_id);
    // pin_card(card_id);
  } else if (BOARD_STATE.second_card == card_id) {
    BOARD_STATE.second_card = null;
    BOARD_STATE.locked = false;
    console.log('[handle_card_unfold] BOARD_STATE', BOARD_STATE);
    fold_card(card_id);
    // pin_card(card_id);
  }

  // fold_card(card_id);
}
