import { h, FC, BaseProps } from "tsx-dom";

import card_back from "/card_back.svg";
import card_blank from "/card_blank.svg";
import card_figured_1 from "/card_figured_1.svg";
import card_figured_2 from "/card_figured_2.svg";
import card_figured_3 from "/card_figured_3.svg";
import card_figured_4 from "/card_figured_4.svg";
import card_figured_5 from "/card_figured_5.svg";

export const TOTAL_CARDS = 15;

const blank_cards = [4, 5, 8, 10, 11]

enum Figure {
  Blank = "blank",
  First = "first",
  Second = "second",
  Third = "third",
  Fourth = "fourth",
  Fifth = "fifth"
}

export const FIGURES_LIST = [
  Figure.First,
  Figure.First,
  Figure.Second,
  Figure.Second,
  Figure.Third,
  Figure.Third,
  Figure.Fourth,
  Figure.Fourth,
  Figure.Fifth,
  Figure.Fifth,
]

const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export function init_cell_list() {
  //
  let list = [];

  shuffle(FIGURES_LIST);

  for (let i = 0; i < TOTAL_CARDS; i++) {
    if (blank_cards.includes(i)) {
      list.push(
        <div id={i.toString()} class="cell">
          <MemoryGameCellDynamic id={i} figure={Figure.Blank} />
        </div>
      )
      continue
    }

    const fig = FIGURES_LIST.shift();

    list.push(
      <div id={i.toString()} class="cell">
        <MemoryGameCellDynamic id={i} figure={fig} />
      </div>
    )
  }

  return list;
}

export function unfold_card(id: string) {
  //
}

interface MemoryGameCellDynamicProps extends BaseProps {
  id?: number
  figure?: Figure
}

export const MemoryGameCellDynamic: FC<MemoryGameCellDynamicProps> = ({ id = 0, figure }: MemoryGameCellDynamicProps) => {
  //
  switch (figure) {
    case Figure.Blank:
      return (
        <div id={id?.toString()} class="image memory-game-cell-image"></div>
      );
    // return (
    //   <MemoryGameCell id={id?.toString()} src={card_blank} />
    // );

    case Figure.First:
      return (
        <MemoryGameCell id={id?.toString()} src={card_figured_1} />
      );

    case Figure.Second:
      return (
        <MemoryGameCell id={id?.toString()} src={card_figured_2} />
      );

    case Figure.Third:
      return (
        <MemoryGameCell id={id?.toString()} src={card_figured_3} />
      );

    case Figure.Fourth:
      return (
        <MemoryGameCell id={id?.toString()} src={card_figured_4} />
      );

    case Figure.Fifth:
      return (
        <MemoryGameCell id={id?.toString()} src={card_figured_5} />
      );

    default:
      return (
        <MemoryGameCell id={id?.toString()} src={card_back} />
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
    <img src={src} />
  </figure>
);


export const MemoryGame: FC<BaseProps> = () => (
  <div class="fixed-grid has-3-cols-mobile memory-game">
    <div class="grid">
      {init_cell_list()}
    </div>
  </div>
);
