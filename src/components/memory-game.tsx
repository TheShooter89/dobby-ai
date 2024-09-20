import { h, FC, BaseProps } from "tsx-dom";

import card_back from "/card_back.svg";
import card_figured_1 from "/card_figured_1.svg";
import card_figured_2 from "/card_figured_2.svg";
import card_figured_3 from "/card_figured_3.svg";
import card_figured_4 from "/card_figured_4.svg";
import card_figured_5 from "/card_figured_5.svg";

// import { Figure } from "../main.tsx";
import { handle_card_unfold, handle_card_fold } from "../actions/buttons.tsx";

import { CELL_LIST, CURRENT_FIGURES_MAP, FIGURES_LIST } from "../state.tsx";

export const TOTAL_CARDS = 15;

const blank_cards_index = [4, 5, 8, 10, 11]

export enum Figure {
  Blank = "blank",
  Back = "back",
  First = "first",
  Second = "second",
  Third = "third",
  Fourth = "fourth",
  Fifth = "fifth"
}

interface MemoryGameCellDynamicProps extends BaseProps {
  id?: string
  figure?: Figure
  click?(event: Event): any
}

export const MemoryGameCellDynamic: FC<MemoryGameCellDynamicProps> = ({ id = "none", figure, click = default_cell_click }: MemoryGameCellDynamicProps) => {
  //
  switch (figure) {
    case Figure.Blank:
      return (
        <div class="image memory-game-cell-image" data-card-id={id}></div>
      );

    case Figure.Back:
      return (
        <MemoryGameCell id={id} src={card_back} click={click} />
      );

    case Figure.First:
      return (
        <MemoryGameCell id={id} src={card_figured_1} click={click} />
      );

    case Figure.Second:
      return (
        <MemoryGameCell id={id} src={card_figured_2} click={click} />
      );

    case Figure.Third:
      return (
        <MemoryGameCell id={id} src={card_figured_3} click={click} />
      );

    case Figure.Fourth:
      return (
        <MemoryGameCell id={id} src={card_figured_4} click={click} />
      );

    case Figure.Fifth:
      return (
        <MemoryGameCell id={id} src={card_figured_5} click={click} />
      );

    default:
      return (
        <MemoryGameCell id={id} src={card_back} click={click} />
      );
  }
};

export function default_cell_click(event: Event) {
  console.log('clicked! event: ', event);
}

interface MemoryGameCellProps extends BaseProps {
  id: string
  src: string
  click?(event: Event): any
}

export const MemoryGameCell: FC<MemoryGameCellProps> = ({ id, src, click = default_cell_click }: MemoryGameCellProps) => (
  <figure onClick={click} class="image memory-game-cell-image">
    <img src={src} data-card-id={id} />
  </figure>
);


export const MemoryGame: FC<BaseProps> = () => (
  <div class="fixed-grid has-3-cols-mobile memory-game">
    <div class="grid">
      {CELL_LIST}
    </div>
  </div>
);
