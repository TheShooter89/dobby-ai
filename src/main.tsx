import './style.css'
import './components/navbar.css'
import './components/viewbox.css'
import './components/dobby.css'
import './components/cloche-button.css'
import './components/interaction-box.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import dobby_logo from "/dobby.svg";

import { h, FC, BaseProps } from "tsx-dom";

import { Navbar, PhantomNavbar } from "./components/navbar.tsx";
import { ViewBox } from "./components/viewbox.tsx";

const body = document.querySelector<HTMLDivElement>('body');

body?.insertBefore(<ViewBox />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);
