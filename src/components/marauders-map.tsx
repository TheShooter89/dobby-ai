import { h, FC, BaseProps } from "tsx-dom";

import potter_map from "/potter-map.svg"

export const MaraudersMap: FC<BaseProps> = () => (
  <figure class="image marauders-map">
    <img src={potter_map} />
  </figure>
);
