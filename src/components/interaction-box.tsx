import { h, FC, BaseProps } from "tsx-dom";

import potter_map from "/potter-map.svg"

export const InteractionBox: FC<BaseProps> = () => (
  <div id="interaction-box" class="interaction-box">
    <figure class="image potter-map-image">
      <img src={potter_map} />
    </figure>
  </div>
);
