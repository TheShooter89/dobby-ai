import { h, FC, BaseProps } from "tsx-dom";

import { DobbyAI } from "./dobby.tsx";
import { ClocheButton } from "./cloche-button.tsx";
import { InteractionBox } from "./interaction-box.tsx";

export const App: FC<BaseProps> = () => (
  <section class="section container is-fluid is-fullheight app">
    <div class="columns">
      <div class="column">
        <DobbyAI />
      </div>

      <div class="column">
        <ClocheButton />
      </div>

      <div class="column">
        <InteractionBox />
      </div>
    </div>
  </section>
);
