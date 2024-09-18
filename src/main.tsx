import './style.css'
import './components/navbar.css'
import './components/viewbox.css'
import './components/dobby.css'
import './components/cloche-button.css'
import './components/interaction-box.css'
import './components/memory-game.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import dobby_logo from "/dobby.svg";

import { h, FC, BaseProps } from "tsx-dom";

import { Navbar, PhantomNavbar } from "./components/navbar.tsx";
import { ViewBox } from "./components/viewbox.tsx";

import { typewrite_effect } from "./actions/typewriter.tsx";
import { dobby_bubble_text_1 } from "./content.tsx";

const body = document.querySelector<HTMLDivElement>('body');

body?.insertBefore(<ViewBox />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);

const dobby_bubble_element = document.getElementById("dobby-bubble-element");

setTimeout(() => typewrite_effect(dobby_bubble_element, dobby_bubble_text_1, dobby_bubble_text_1.split(""), "", 65), 1000);
