import './style.css'
import './components/navbar.css'
import './components/app.css'
import './components/dobby.css'
import './components/cloche-button.css'
import './components/interaction-box.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import dobby_logo from "/dobby.svg";

import { h, FC, BaseProps } from "tsx-dom";

import { Navbar } from "./components/navbar.tsx";
import { App } from "./components/app.tsx";

const body = document.querySelector<HTMLDivElement>('body');

body?.insertBefore(<App />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);
