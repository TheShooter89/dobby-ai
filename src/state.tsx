import { h, FC, BaseProps } from "tsx-dom";
import { MemoryGameCellDynamic } from "./components/memory-game.tsx";
import { handle_card_unfold } from "./actions/buttons.tsx";

enum Figure {
  Blank = "blank",
  Back = "back",
  First = "first",
  Second = "second",
  Third = "third",
  Fourth = "fourth",
  Fifth = "fifth"
}

export const TOTAL_CARDS = 15;

const blank_cards_index = [4, 5, 8, 10, 11]


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
export const CELL_LIST: Array<JSX.Element> = [];

export let FIRST_OPENED_CARD;

const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export function init_cell_list() {
  //
  let list = [];

  shuffle(FIGURES_LIST);

  for (let i = 0; i < TOTAL_CARDS; i++) {
    if (blank_cards_index.includes(i)) {
      const cell = (
        <div id={"gamecell-" + i.toString()} class="cell">
          <MemoryGameCellDynamic id={"gamecell-" + i.toString()} figure={Figure.Blank} />
        </div>
      );

      CELL_LIST.push(cell);
      list.push(cell)
      continue
    }

    const fig = FIGURES_LIST.shift();
    CURRENT_FIGURES_MAP.set("gamecell-" + i, fig);

    const cell = (
      <div id={"gamecell-" + i.toString()} class="cell">
        <MemoryGameCellDynamic id={"gamecell-" + i.toString()} figure={Figure.Back} click={handle_card_unfold} />
      </div>
    );

    CELL_LIST.push(cell);
    list.push(cell);
  }

  console.log('CURRENT_FIGURES_MAP: ', CURRENT_FIGURES_MAP);

  return list;
}
