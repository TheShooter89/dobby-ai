import { h, FC, BaseProps } from "tsx-dom";

import { DobbyAI } from "./dobby.tsx";
import { ClocheButton } from "./cloche-button.tsx";
import { InteractionBox } from "./interaction-box.tsx";

export const ViewBox: FC<BaseProps> = () => (
  <section class="section container is-fluid pt-4 pb-0 viewbox">
    <div class="columns">
      <div class="column viewbox-column-dobby">
        <DobbyAI />
      </div>

      <div class="column viewbox-column-cloche">
        <ClocheButton />
      </div>

      <div class="column viewbox-column-interaction">
        <InteractionBox />
      </div>
    </div>
  </section>
);
