import { h, FC, BaseProps } from "tsx-dom";

import { MemoryGame, init_cell_list } from "../components/memory-game.tsx";

export function load_memory_game(this: HTMLElement, event: Event) {
  // let test_list = init_cell_list();
  // console.log('test_list: ', test_list);
  //
  event.preventDefault();
  console.log('load_memory_game function called');

  const target = document.getElementById("interaction-box") as HTMLDivElement;

  while (target.firstChild) {
    target.removeChild(target.lastChild);
  }

  const new_element = (<MemoryGame />);

  target.appendChild(new_element);
}
