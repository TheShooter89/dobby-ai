import { h, FC, BaseProps } from "tsx-dom";

import { DobbyAI } from "./dobby.tsx";
import { ClocheButton } from "./cloche-button.tsx";
import { InteractionBox } from "./interaction-box.tsx";

import { load_memory_game } from "../actions/buttons.tsx";

export const ViewBox: FC<BaseProps> = () => (
  <section class="section container is-fluid pl-4 pr-4 pt-4 pb-0 viewbox">
    <div class="columns is-multiline">
      <div class="column is-half-desktop viewbox-column-dobby">
        <DobbyAI />
      </div>

      <div class="column level mb-0 is-half-desktop viewbox-column-cloche">
        <div class="level-item">
          <ClocheButton text="ALOHOMORA" onclick={load_memory_game} />
        </div>
      </div>

      <div class="column is-half-desktop is-offset-half pt-0 pb-0 viewbox-column-interaction">
        <div class="level">
          <div class="level-item viewbox-level-item-interaction ">
            <InteractionBox />
          </div>
        </div>
      </div>
    </div>
  </section>
);
