import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

import { h, FC, BaseProps } from "tsx-dom";

import { setupCounter } from './counter.ts'
import { Navbar } from "./navbar.tsx";

interface ButtonProps extends BaseProps { }

const App: FC<ButtonProps> = () => (<h1>app</h1>)

// const body = document.querySelector<HTMLDivElement>('#app');
// body?.insertBefore(<App />, body.firstChild);

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// document.querySelector<HTMLDivElement>('#app')?.appendChild(title);

const body = document.querySelector<HTMLDivElement>('body');
body?.insertBefore(<App />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);
