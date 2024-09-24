import { h, FC, BaseProps } from "tsx-dom";

import potter_map from "/potter-map.svg"

import { MemoryGame } from "../components/memory-game.tsx";
import { unfold_card, fold_card, handle_card_check, } from "../actions/cards.tsx";
import { BOARD_STATE } from "../state.tsx";
import { BirthdayGift } from "../components/birthday-gift.tsx";
import { animate_text } from "./typewriter.tsx";

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

export function get_bubble_element() {
  //
  console.log('[get_bubble_element] retrieving bubble text element')
  const bubble_element = document.getElementById("dobby-bubble-element");

  return bubble_element;
}

export function explain_game() {
  console.log('[explain_game] explain game bubble called')
  const bubble_element = document.getElementById("dobby-bubble-element");

  animate_text(bubble_element, "explaining", 65, () => { console.log('dobby explained the game') });
}

