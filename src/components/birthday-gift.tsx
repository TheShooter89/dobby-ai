import { h, FC, BaseProps } from "tsx-dom";

import dobby_logo from "/dobby.svg";

export const BirthdayGift: FC<BaseProps> = () => (
  <section class="mt-5">
    <h2 class="title is-size-2 is-size-3-mobile mb-4 has-text-centered">Tanti Auguri</h2>
    <p class="subtitle is-size-4 is-size-5-mobile oswald-font mb-5 has-text-centered">buon compleanno Erica</p>
    <img src={dobby_logo} class="image" />
  </section>
);
