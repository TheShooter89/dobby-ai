import { h, FC, BaseProps } from "tsx-dom";

import { MemoryGame } from "../components/memory-game.tsx";

export function load_memory_game(this: HTMLElement, event: Event) {
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
