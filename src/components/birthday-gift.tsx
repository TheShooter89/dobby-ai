import { h, FC, BaseProps } from "tsx-dom";

import dobby_logo from "/dobby.svg";

export const BirthdayGift: FC<BaseProps> = () => (
  <section>
    <h2 class="title is-size-3">Tanti Auguri</h2>
    <p>buon compleanno Erica</p>
    <img src={dobby_logo} class="image" />
  </section>
);
