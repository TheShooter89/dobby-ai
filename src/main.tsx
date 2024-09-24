import './style.css'
import './components/navbar.css'
import './components/viewbox.css'
import './components/dobby.css'
import './components/cloche-button.css'
import './components/interaction-box.css'
import './components/memory-game.css'
import './components/marauders-map.css'
import './components/birthday-gift.css'
import './components/celebration.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import dobby_logo from "/dobby.svg";

import { h, FC, BaseProps } from "tsx-dom";

import { init_cell_list } from "./state.tsx";

import { Navbar } from "./components/navbar.tsx";
import { ViewBox } from "./components/viewbox.tsx";

import { animate_text, show_button } from "./actions/typewriter.tsx";
import { explain_game } from "./actions/text_bubble.tsx";

import { dobby_bubble_text_1 } from "./content.tsx";



const body = document.querySelector<HTMLDivElement>('body');

body?.insertBefore(<ViewBox />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);

const dobby_bubble_element = document.getElementById("dobby-bubble-element");

init_cell_list();

console.log('past init_cell_list call');

setTimeout(() => {
  animate_text(dobby_bubble_element, dobby_bubble_text_1, 65, show_button);
  // show_button();
}, 1000);
