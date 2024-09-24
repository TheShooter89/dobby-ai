import { h, FC, BaseProps } from "tsx-dom";

import dobby_logo from "/dobby.svg";

import celebrate from "/celebrate.svg";

export const Celebration: FC<BaseProps> = () => (
  <section class="mt-5 celebration">
    <h2 class="title is-size-2 is-size-3-mobile mb-4 has-text-centered">TROVATE TUTTE!</h2>

    <img src={celebrate} class="image" />
  </section >
);
