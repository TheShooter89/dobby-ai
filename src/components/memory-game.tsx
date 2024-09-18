import { h, FC, BaseProps } from "tsx-dom";

import dobby_logo from "/dobby.svg";

export const MemoryGame: FC<BaseProps> = () => (
  <div class="columns is-mobile memory-game">
    <div class="column pl-0 pr-0 pt-6 pb-0">
      <figure class="image dobby-image">
        <img src={dobby_logo} />
      </figure>
    </div>

    <div class="column pl-0 pt-5">
      <p id="memory-game-element" class="is-size-4 is-size-6-mobile pl-3 oswald-font">Another cell</p>
    </div>
  </div>
);
