import { h, FC, BaseProps } from "tsx-dom";

import dobby_logo from "/dobby.svg";

export const BirthdayGift: FC<BaseProps> = () => (
  <div class="columns is-mobile birthday-gift">
    <div class="column pl-0 pr-0 pt-6 pb-0 is-one-third is-one-third-mobile">
      <figure class="image dobby-image">
        <img src={dobby_logo} />
      </figure>
    </div>

    <div class="column pl-0 pt-5 is-two-thirds is-two-thirds-mobile">
      <p id="dobby-bubble-element" class="is-size-4 is-size-6-mobile pl-3 oswald-font"></p>
    </div>
  </div>
);
