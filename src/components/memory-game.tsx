import { h, FC, BaseProps } from "tsx-dom";

import card_back from "/card_back.svg";

export function cell_list(total: number) {
  let list = [];
  for (let i = 0; i < total; i++) {
    list.push(
      <div class="cell">
        <MemoryGameCell />
      </div>
    );
  }

  return list;
}

export const MemoryGameCell: FC<BaseProps> = () => (
  <figure class="image memory-game-cell-image">
    <img src={card_back} />
  </figure>
);


export const MemoryGame: FC<BaseProps> = () => (
  <div class="fixed-grid has-4-cols-mobile memory-game">
    <div class="grid">
      {/* <div class="cell"> */}
      {/*   <MemoryGameCell /> */}
      {/* </div> */}
      {/**/}
      {/* <div class="cell"> */}
      {/*   <MemoryGameCell /> */}
      {/* </div> */}

      {cell_list(20)}
    </div>
  </div>
);
