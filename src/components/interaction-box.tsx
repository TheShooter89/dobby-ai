import { h, FC, BaseProps } from "tsx-dom";

import potter_map from "/potter-map.svg"
import { MaraudersMap } from "./marauders-map";

export const InteractionBox: FC<BaseProps> = () => (
  <div id="interaction-box" class="interaction-box">
    <MaraudersMap />
  </div>
);
