import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import dobby_logo from "/dobby.svg";

import { h, FC, BaseProps } from "tsx-dom";

import { setupCounter } from './counter.ts'
import { Navbar } from "./navbar.tsx";

interface ButtonProps extends BaseProps { }

const App: FC<ButtonProps> = () => (
  <section class="section container is-fluid is-fullheight">
    <div class="container">
      <div class="fixed-grid has-2-cols">
        <div class="grid dobby-grid">
          <div class="cell dobby-grid-logo-cell">
            <figure class="image is-1by1 dobby-logo">
              <img src={dobby_logo} />
            </figure>
          </div>

          <div class="cell">
            <p>Very long text to be rendered with typewriter effect</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const body = document.querySelector<HTMLDivElement>('body');
body?.insertBefore(<App />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);
