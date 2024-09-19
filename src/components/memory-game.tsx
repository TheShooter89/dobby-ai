import { h, FC, BaseProps } from "tsx-dom";

import card_back from "/card_back.svg";
import card_figured_1 from "/card_figured_1.svg";
import card_figured_2 from "/card_figured_2.svg";
import card_figured_3 from "/card_figured_3.svg";
import card_figured_4 from "/card_figured_4.svg";
import card_figured_5 from "/card_figured_5.svg";

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

export const CURRENT_FIGURES_MAP = new Map<string, Figure>;

const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export function init_cell_list() {
  //
  let list = [];

  shuffle(FIGURES_LIST);

  for (let i = 0; i < TOTAL_CARDS; i++) {
    if (blank_cards_index.includes(i)) {
      list.push(
        <div id={"gamecell-" + i.toString()} class="cell">
          <MemoryGameCellDynamic id={"gamecell-" + i.toString()} figure={Figure.Blank} />
        </div>
      )
      continue
    }

    const fig = FIGURES_LIST.shift();
    CURRENT_FIGURES_MAP.set("gamecell-" + i, fig);

    list.push(
      <div id={"gamecell-" + i.toString()} class="cell">
        <MemoryGameCellDynamic id={"gamecell-" + i.toString()} figure={Figure.Back} click={unfold_card} />
        {/* <MemoryGameCellDynamic id={"gamecell-" + i.toString()} figure={fig} /> */}
      </div>
    )
  }

  console.log('CURRENT_FIGURES_MAP: ', CURRENT_FIGURES_MAP);
  return list;
}

export function unfold_card(event: Event) {
  //
  event.stopPropagation();
  let event_element = event.target as Element;

  let card_id = event_element.getAttribute("data-card-id") || "none";
  let card_element = document.getElementById(card_id || "none");

  let figure = CURRENT_FIGURES_MAP.get(card_id || Figure.Blank);

  console.log('-------DEBUG (unfold_card)-------');
  console.log('raw event', event);
  console.log('raw event.target', event.target);
  console.log('raw event.currentTarget', event.currentTarget);
  console.log('raw card_element', card_element);

  while (card_element?.firstChild) {
    card_element.removeChild(card_element.lastChild);
  }

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={figure} click={fold_card} />);
}

export function fold_card(event: Event) {
  //
  event.stopPropagation();
  let event_element = event.target as Element;

  let card_id = event_element.getAttribute("data-card-id") || "none";
  let card_element = document.getElementById(card_id || "none");

  console.log('-------DEBUG (unfold_card)-------');
  console.log('raw event', event);
  console.log('raw event.target', event.target);
  console.log('raw event.currentTarget', event.currentTarget);
  console.log('raw card_element', card_element);

  while (card_element?.firstChild) {
    card_element.removeChild(card_element.lastChild);
  }

  card_element?.appendChild(<MemoryGameCellDynamic id={card_id} figure={Figure.Back} click={unfold_card} />);
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
    // return (
    //   <MemoryGameCell id={id?.toString()} src={card_blank} />
    // );

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
      {init_cell_list()}
    </div>
  </div>
);
