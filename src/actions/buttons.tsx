import { h, FC, BaseProps } from "tsx-dom";

import { MemoryGame, init_cell_list } from "../components/memory-game.tsx";
import { unfold_card, fold_card } from "../actions/cards.tsx";

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

  let card_id = event_element.getAttribute("data-card-id") || "none";
  console.log('handler card_id', card_id);
  let card_element = document.getElementById(card_id || "none");

  unfold_card(card_id);
}

export function handle_card_fold(event: Event) {
  //
  event.stopPropagation();
  let event_element = event.target as Element;

  let card_id = event_element.getAttribute("data-card-id") || "none";
  console.log('handler card_id', card_id);
  let card_element = document.getElementById(card_id || "none");

  fold_card(card_id);
}
