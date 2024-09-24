import { h, FC, BaseProps } from "tsx-dom";

import dobby_logo from "/dobby.svg";

import birthday_gift_image_1 from "/birthday_gift_image_1.jpg";

export const BirthdayGift: FC<BaseProps> = () => (
  <section class="mt-5">
    <h2 class="title is-size-2 is-size-3-mobile mb-4 has-text-centered">Tanti Auguri</h2>

    <p class="subtitle is-size-4 is-size-5-mobile oswald-font mb-5 has-text-centered">buon compleanno Erica</p>

    <img src={birthday_gift_image_1} class="image" />

    <p class="subtitle is-size-4 is-size-5-mobile oswald-font mb-5 mt-5 has-text-centered">buon compleanno Erica</p>

    <figure class="image is-16by9">
      <iframe
        width="560"
        height="315"
        class="has-ratio"
        src="https://www.youtube.com/embed/YQHsXMglC9A?si=Of5J5ooEHpZbQJtp"
        title="YouTube
        video
        player"
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </figure>
  </section >
);
