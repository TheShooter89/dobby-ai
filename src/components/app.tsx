import { h, FC, BaseProps } from "tsx-dom";

import { DobbyAI } from "./dobby.tsx";
import { ClocheButton } from "./cloche-button.tsx";
import { InteractionBox } from "./interaction-box.tsx";

export const App: FC<BaseProps> = () => (
  <section class="section container is-fluid pt-4 app">
    <div class="columns">
      <div class="column app-column-dobby">
        <DobbyAI />
      </div>

      <div class="column app-column-cloche">
        <ClocheButton />
      </div>

      <div class="column app-column-interaction">
        <InteractionBox />
      </div>
    </div>
  </section>
);
